#!/usr/bin/env python3
"""Parse image-search JSON outputs and pick best image per slot.

The z-ai CLI prints status lines (emojis) BEFORE the JSON, so we need to
extract the JSON block from each file.
"""
import json
import os
import re

SLOTS = {
    "hero_workspace": "/home/z/my-project/scripts/img_hero.json",
    "abstract_orange": "/home/z/my-project/scripts/img_abstract.json",
    "dhaka_city": "/home/z/my-project/scripts/img_dhaka.json",
    "project_travel": "/home/z/my-project/scripts/img_proj1.json",
    "project_hotel": "/home/z/my-project/scripts/img_proj2.json",
    "project_art": "/home/z/my-project/scripts/img_proj3.json",
    "portrait_dev": "/home/z/my-project/scripts/img_portrait.json",
    "code_macro": "/home/z/my-project/scripts/img_code.json",
}


def extract_json(text):
    # Find the first '{' and match to the last '}'
    start = text.find("{")
    if start < 0:
        return None
    # Walk to matching closing brace
    depth = 0
    for i in range(start, len(text)):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return json.loads(text[start : i + 1])
    return None


out = {}
for slot, path in SLOTS.items():
    if not os.path.exists(path):
        print(f"MISSING: {slot} -> {path}")
        continue
    with open(path) as f:
        raw = f.read()
    data = extract_json(raw)
    if not data:
        print(f"FAILED to parse JSON in {slot}")
        continue
    results = data.get("results", [])
    if not results:
        print(f"EMPTY results for {slot}")
        continue

    def pixel_count(r):
        try:
            w = int(str(r.get("original_width", "0")).replace("px", ""))
            h = int(str(r.get("original_height", "0")).replace("px", ""))
            return w * h
        except Exception:
            return 0

    results_sorted = sorted(results, key=pixel_count, reverse=True)
    best = results_sorted[0]
    out[slot] = {
        "url": best["original_url"],
        "width": best.get("original_width"),
        "height": best.get("original_height"),
        "source": best.get("source"),
    }
    print(f"\n=== {slot} ===")
    print(f"  URL:    {best['original_url']}")
    print(f"  Size:   {best.get('original_width')} x {best.get('original_height')}")
    print(f"  Source: {best.get('source')}")
    print(f"  Alternatives:")
    for i, r in enumerate(results_sorted[1:3], 2):
        print(f"    {i}. {r['original_url']}  ({r.get('original_width')} x {r.get('original_height')})")

with open("/home/z/my-project/scripts/selected_images.json", "w") as f:
    json.dump(out, f, indent=2)
print(f"\n\nSaved selection to /home/z/my-project/scripts/selected_images.json")
print(f"Total slots filled: {len(out)}/{len(SLOTS)}")
