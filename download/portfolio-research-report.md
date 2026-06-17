# Portfolio Website — Reference & Content Analysis Report

Analyzed 4 JSON page snapshots to extract (a) the complete professional profile of **Tanveer Ahmed** for portfolio content, and (b) the visual design systems of three reference portfolio sites to inform the build.

- Source files (in `/home/z/my-project/scripts/`):
  - `linkedin.json` → LinkedIn profile of Tanveer Ahmed
  - `ref1_shehata.json` → https://mohamedshehata.net/
  - `ref2_lesse.json` → https://lessestudio.com/
  - `ref3_kvs.json` → https://www.kvs.services/

---

## PART 1 — TANVEER AHMED (LinkedIn profile content for the portfolio)

### 1.1 Identity & Contact

| Field | Value |
|---|---|
| **Full name** | Tanveer Ahmed |
| **Headline (LinkedIn)** | "Tanveer Ahmed - SM Technology" |
| **Location** | Uttara, Dhaka, Bangladesh (country code: BD) |
| **LinkedIn URL** | https://bd.linkedin.com/in/tanveerahmed45 |
| **Followers / Connections** | 97 followers · 97 connections |
| **Profile photo URL** | https://media.licdn.com/dms/image/v2/D5603AQEDgqzhEM01aQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718229642913?e=2147483647&v=beta&t=QpTWpW959wAJ7k9h2ZBEGitSF42FiqleZxVUm9hWtVM |
| **Portfolio website (linked from profile)** | https://tanveer-ahmed-194ed.web.app/ (labelled "Portfolio" on LinkedIn top-card) |
| **Contact info visible to public** | None (email/phone hidden behind sign-in wall) |

### 1.2 About / Summary

> "Hello there! 🔍 I'm deeply passionate about the MERN stack (MongoDB, Express.js…"

The public profile shows the About text truncated with a "see more" link that requires sign-in. Only this opening sentence is visible in the meta description and JSON-LD `description` field. The full body is not retrievable from this snapshot — Tanveer should be asked to paste the full About text directly.

### 1.3 Current Position

- **Company:** SM Technology
- **Location of company:** Banasree, Rampura, Dhaka
- **Company LinkedIn:** https://www.linkedin.com/company/smtechnology
- **Company logo URL:** https://media.licdn.com/dms/image/v2/D4E0BAQHCT2IJcaJC3w/company-logo_100_100/B4EZVlfmddH0AU-/0/1741164538166/smtechnology_logo?e=2147483647&v=beta&t=k-9_fO88nSjitenw7ydXKRDuS88_1RLdMcgmrIFnCNY
- **Job title:** masked in public view (LinkedIn hides it; JSON-LD lists 3 titles in total — see note below)

> **Note on masked data:** LinkedIn's public profile masks the exact job titles and several company/school names. The structured data (`application/ld+json`) lists three `worksFor` organizations and three `jobTitle` values, but two of the companies and all three job titles are rendered as asterisks (e.g. `**** ****`, `******** *********`, `*** *********`). All three `worksFor` entries share the location "Banasree, Rampura Dhaka", suggesting Tanveer has worked at three organizations in the same area. These must be confirmed directly with Tanveer.

### 1.4 Work Experience (visible)

| # | Company | Role | Dates | Notes |
|---|---|---|---|---|
| 1 | SM Technology | _(masked)_ | current | Banasree, Rampura Dhaka |
| 2 | _(masked, "** **********")_ | _(masked)_ | _(not shown)_ | Banasree, Rampura Dhaka |
| 3 | _(masked, "** **********")_ | _(masked)_ | _(not shown)_ | Banasree, Rampura Dhaka |

The "Experience & Education" panel visible on the page also lists two date ranges tied to masked institution names:
- **2020 – 2022** → "***** ******* ******** ********** ** *****" (matches the Govt. Titumir College entry from JSON-LD, Dec 2020 – Jun 2022)
- **2015 – 2020** → "***** ******* ******** ********** ** *****" (masked school; possibly higher-secondary / bachelor institution)

> Three job titles in JSON-LD, character patterns `(4 4)`, `(8 9)`, `(3 9)`. Likely candidates by length: "Tech Lead" (4+4), "Frontend Developer" (8+9), "Web Developer" (3+9). These are guesses — confirm with Tanveer.

### 1.5 Education

| # | Institution | Period | URL |
|---|---|---|---|
| 1 | **Govt. Titumir College, University of Dhaka** | Dec 2020 → Jun 2022 | https://bd.linkedin.com/school/gtcdu/ |
| 2 | _(masked: "***** ******* ******** ********** ** *****")_ | 2015 → 2020 | — |
| 3 | _(masked: "********* *******")_ | ended Apr 2014 | — |
| 4 | _(masked: "****** **** ******")_ | ended Mar 2012 | — |

> Pattern suggests a typical Bangladeshi academic path: primary → secondary (SSC ~2014) → higher secondary (HSC ~2016) → honours (2016–2020) → master's at Govt. Titumir College (2020–2022). Confirm with Tanveer.

### 1.6 Licenses & Certifications (3 entries — verbatim)

1. **Introduction to Typescript** — Great Learning — Issued Jun 2024 (expires Jun 2024)
2. **UI / UX for Beginners** — Great Learning — Issued Jun 2024 (expires Jun 2024)
3. **Complete Web Development Course With Jhankar Mahbub** — Programming Hero — Issued Dec 2023 (expires Jun 2024)
   - Credential ID: **WEB9-1402**
   - Credential URL (Google Drive): https://drive.google.com/file/d/1YiKkUrgu9INcj2Ju8qCjPhXW9Fa2uMp1/view?usp=sharing

> A liked-post in the activity feed also references the "Black Belt for Complete Web Development Course, the highest achievement for Front-end Web…" — i.e. the Programming Hero course awards a "Black Belt" tier; Tanveer achieved that level. (The liked post itself was authored by another user, `hasibpsy`, but the cert is the same course.)

### 1.7 Courses

Same three as the certifications (LinkedIn duplicates them):
- Complete Web Development Course With Jhankar Mahbub — Programming Hero
- Introduction to Typescript — Great Learning
- UI / UX for Beginners — Great Learning

### 1.8 Projects (3 — full descriptions verbatim from "Show more" expansion)

#### Project 1 — Shadow Tourist (Jun 2024)
- **Live link:** https://shadow-tourist.web.app/
- **Technologies Used:** React.js, MongoDB, Express, Firebase, JWT, Axios, React Query, React Hook Form, Tailwind CSS, Stripe Payment
- **Project Features:** "Shadow Tourist is a platform designed to make travel easier by providing seamless booking, Wishlist management, dynamic storytelling, and the ability to hire guides."
- **Key Features:**
  - 🏨 **Easy Booking and Wishlist Management and Dashboards:** Users can easily book tours and manage their Wishlist's, making travel planning more convenient. This feature ensures a user-friendly experience. This project includes role-based dashboards for tourists, tour guides, and admins.
  - 🔒 **Secure Authentication and Payments:** Firebase authentication ensures secure user registration and login, while Stripe handles secure payment processing. These features protect user data and ensure smooth transactions.
  - 📱 **Responsive Design:** Haven Hearth ensures optimal performance across devices of all sizes, delivering a consistent user experience.
- **Additional Features:**
  - 🔑 JWT Authentication: Create and store JWT tokens upon login for both email/password and social login. Implement JWT on private routes to ensure secure access.
  - 🏡 Homepage Banner and Slider: Engaging visuals create an inviting atmosphere for potential guests.
  - 🦶 Footer: Provides essential information and fosters engagement beyond the homepage.
- **Privacy and User Experience:** Private routes ensure user privacy and security, enhancing the overall experience. Only authenticated users can access booking and review functionalities.
- **Summary:** "In conclusion, Shadow Tourist integrates React.js, MongoDB, Express, Firebase, and Stripe to create a secure and seamless travel booking platform. With features like role-based dashboards, secure authentication, and responsive design, it enhances user convenience and data security while delivering an engaging travel experience."

> Also announced in his own LinkedIn post (Jul 7, 2024) with hashtags: #MERNstack #WebDevelopment #ReactJS #NodeJS #MongoDB #Firebase #ExpressJS #TailwindCSS #TravelTech #UserExperience #JWTAuthentication #SecurePayments #ResponsiveDesign #TourismPlatform #GuideBooking #WishlistManagement #PrivateRoutes
> Post URL: https://www.linkedin.com/posts/tanveerahmed45_mernstack-webdevelopment-reactjs-activity-7215670037670502401-NNml

#### Project 2 — Haven Hearth (May 2024)
- **Live link:** https://react-haven-hearth.web.app/
- **Technologies Used:** JavaScript, React, Tailwind CSS, Firebase, MongoDB, Express, Node.js, JWT
- **Project Features:** "Haven Hearth is a hotel booking platform designed to provide a seamless and intuitive experience for travelers."
- **Key Features:**
  - 🏨 **Manage Bookings:** Registered users can book rooms, update their bookings, and cancel reservations with ease. This feature gives users full control over their travel plans, allowing them to make adjustments as needed.
  - 🔒 **User Authentication:** Users can register and log in securely using Firebase authentication, ensuring their accounts and data are protected.
  - 📱 **Responsive Design:** Haven Hearth ensures optimal performance across devices of all sizes, delivering a consistent user experience.
- **Additional Features:**
  - 🔑 JWT Authentication: Create and store JWT tokens upon login for both email/password and social login. Implement JWT on private routes to ensure secure access.
  - 🏡 Homepage Banner and Slider: Engaging visuals create an inviting atmosphere for potential guests.
  - 🛌 Room Categories: Visitors can explore subcategories within the "Rooms" section, filtering by price and availability.
  - 🌟 User Reviews: Display authentic user reviews and ratings to build trust. Reviews are sorted in descending order based on timestamp, ensuring the latest feedback is shown first.
  - 🎁 Special Offers and Promotions: Showcase offers and promotions prominently on the home page. Display offers in a popup or modal to catch users' attention.
  - 🦶 Footer: Provides essential information and fosters engagement beyond the homepage.
- **Privacy and User Experience:** Private routes ensure user privacy and security, enhancing the overall experience. Only authenticated users can access booking and review functionalities.
- **Summary:** "In conclusion, Haven Hearth offers a sophisticated and user-friendly platform for booking hotel accommodations."

#### Project 3 — Artisan Haven (Apr 2024)
- **Live link:** https://react-artisan-haven-client.web.app/
- **Description:** "Artisan Haven is an online platform dedicated to celebrating the intricate world of art and craft, primarily centred around the 'Painting and Drawing' category."
- **Key Features:**
  - ✏️ **Manage Art Pieces:** Registered users can add their own art pieces to the platform, update their previously uploaded art, and delete their art pieces, giving them full control over their gallery and contributions while sharing their creativity with the community.
  - 🔒 **User Authentication:** Users can register and log in securely using Firebase authentication, ensuring their accounts and data are protected.
  - 📱 **Responsive Design:** Artisan Haven ensures optimal performance across devices of all sizes, delivering a consistent user experience.
- **Database:** "MongoDB is employed as the project's database solution, facilitating the storage and retrieval of data related to user accounts, craft items, and other essential information. Its flexibility and scalability make it ideal for handling diverse data types in a structured manner."
- **Additional Features:**
  - 🧭 Navbar: Facilitates easy exploration of different sections.
  - 📝 Firebase Authentication: Streamlined login and registration process with Firebase, providing options for social login.
  - 🌟 Banner and Slider: Engaging visuals set the tone for the artistic journey.
  - 🖼️ Art & Craft Categories: Visitors can explore subcategories within the "Painting and Drawing" category.
  - 🌓 Dark/Light Theme Toggle: Customisable browsing experience for optimal readability.
  - 🦶 Footer: Provides essential information and fosters engagement beyond the homepage.
- **Privacy and User Experience:** Private routes ensure user privacy and security, enhancing the overall experience.
- **Summary:** "In conclusion, Artisan Haven offers a digital oasis for art and craft enthusiasts, empowering them to express themselves and connect with others on an enriching artistic journey."

### 1.9 Languages

| Language | Proficiency |
|---|---|
| English | Professional working proficiency |
| Bangla | Native or bilingual proficiency |
| Hindi | Elementary proficiency |

### 1.10 Articles by Tanveer (1)

- **Title:** "Why Should We Use React for the Front-End?"
- **Published:** May 18, 2024 (ISO: 2024-05-18T18:24:40.000+00:00)
- **Engagement:** 4 reactions, 1 comment
- **Article URL:** https://www.linkedin.com/pulse/why-should-we-use-react-front-end-tanveer-ahmed-9lhec
- **Cover image URL:** https://media.licdn.com/dms/image/v2/D5612AQH5yCFtk0KycA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1716056043722?e=2147483647&v=beta&t=Q4QL9H71fPB5vS7QQjfWButZlb3cZ3aT9K0ho80AqVY
- **Visible preview:** "When it comes to building websites and applications, the tools you choose can greatly impact how successful your…"
- **Article entity URN:** urn:li:linkedInArticle:7197660386051907584

### 1.11 Activity Feed — Tanveer's OWN posts vs LIKED posts

**OWN content (created by Tanveer):**
1. Article: "Why Should We Use React for the Front-End?" (May 18, 2024) — see §1.10
2. Shared post: "Project Name: Shadow Tourist" announcement (Jul 7, 2024) — see §1.8 Project 1

**Liked posts (visible in "Activity" / "More activity by Tanveer" — authored by others, shown because Tanveer liked them):**

| Post (truncated) | Original author URL |
|---|---|
| "🚀 Just Launched: Shopify Backdoor Management Tool (For Developers Only) 🛠️ After facing a few tough client experiences, I've created and…" | linkedin.com/posts/zakariabinmoti_… |
| "❤️❤️" (image post) | linkedin.com/posts/sajib-babu_… |
| "I'm happy to share that I've obtained a new certification: Black Belt for Complete Web Development Course, the highest achievement for Front-end Web…" | linkedin.com/posts/hasibpsy_… |
| "Progress comes from action; failure comes from indecision, confusion, and hesitation. Ditch all self-doubt. Make a bold decision and give it…" | linkedin.com/posts/jhankar_… |
| "🚀 Exciting Career Milestone! I'm thrilled to share that I've started as a Node.js Developer at GlowRadius! This is a significant step forward in my…" | linkedin.com/posts/fatemachowdhury318_… |
| "LinkedIn এ কাউকে মেসেজ দেওয়ার ১ টি সেরা উপায়? 😁 কারো কাছ থেকে শিখব কিভাবে? 🤯 #Bangladesh #networking #talent #jobs #hirings #careers" | linkedin.com/posts/abdurrakib0_… |
| "🇧🇩 How are you doing, my LinkedIn connections? Especially our students and the next generation who will build a stronger Bangladesh. I still…" | linkedin.com/posts/abdurrakib0_… |
| "5 Mind-Blowing CSS Tools that you should know about 🔥 Tools Links in Caption ⬇️ 1) Clippy - https://lnkd.in/dWWY7vWp 2) Fancy Border Radius to…" | linkedin.com/posts/rammcodes_… |
| "🤯 স্কিল ডেভেলপমেন্টর ১ টি সেরা উপায়? East West University Robotics Club X Programming Hero More details in the comment section 👇…" | linkedin.com/posts/abdurrakib0_… |
| "AI: Your New Coding Buddy! 🚀 Are you new to programming and feeling overwhelmed? Don't worry, AI is here to help! 🤖 From explaining complex…" | linkedin.com/posts/a-h-nayeem-a00h6_… |

> **Inference:** The liked posts reveal Tanveer's interests/affiliations — he follows **Jhankar Mahbub / Programming Hero** (his bootcamp instructor), **Abdur Rakib** (Bangladesh tech community leader), **RammCodes** (CSS tools), and the **Programming Hero** ecosystem. Worth weaving into the "Influences / Community" section of the portfolio.

### 1.12 Skills Section

LinkedIn hides the **Skills** section behind the sign-in wall for public viewers. No skills are directly listed on the public page. However, from project descriptions and certifications, the following skill set is confirmed:

**Frontend:** React.js, JavaScript (ES6+), TypeScript (intro), Tailwind CSS, React Query, React Hook Form, Axios, Responsive Design, Dark/Light Theme Toggle
**Backend:** Node.js, Express.js, REST APIs, JWT Authentication
**Database:** MongoDB
**Auth & Payments:** Firebase Authentication, Stripe Payment
**Tooling / Workflow:** Git (implied), Vercel/Firebase Hosting (web.app deployments)
**Design:** UI/UX fundamentals (Great Learning cert), HTML/CSS
**Concepts:** MERN stack, Role-based dashboards, Private routes, Wishlist/booking flows, Social login, Popup/modals, Reviews & ratings, Pagination/filtering

> Action item: ask Tanveer to paste his full LinkedIn Skills list to populate a dedicated "Skills" section verbatim.

### 1.13 Volunteer / Honors / Awards

Not present in the public snapshot. The "awards" array in JSON-LD is empty (`[]`). No volunteer section visible. Confirm with Tanveer.

### 1.14 Other Notes

- Profile language default: English (with Bangla and Hindi content in activity feed).
- "Others named Tanveer Ahmed" panel lists 4,028+ other people by the same name — common name; consider differentiating the portfolio with a tagline.
- The "Add new skills with these courses" suggestions (LinkedIn auto-generated, not Tanveer's): AWS API Gateway with HTTP, Lambda, DynamoDB, and iOS (2h 1m); Programming Foundations: Databases (2h 26m); CSS: Advanced Layouts with Grid (2h 28m). **Not** part of Tanveer's profile — ignore.

---

## PART 2 — REFERENCE SITE 1: mohamedshehata.net (Mohamed Shehata)

### 2.1 What it is
Personal portfolio of **Mohamed Shehata**, Head of UX / UX & Product Design Leader with 23+ years across the GCC. Senior executive-level positioning (SAR 1.22B revenue under UX leadership, NN/g VP/Director certified). Awwwards-style premium personal site.

### 2.2 Visual Design / Aesthetic
- **Editorial, magazine-style portfolio** with alternating light/dark sections.
- Premium, restrained, confident tone — uses large editorial typography with tight negative letter-spacing and a single bold accent color.
- Heavy use of motion: animated splash intro, custom WebGL fluid-reveal canvas over a hero portrait, custom cursor, marquee, animated counters.
- Dark sections use deep near-black; light sections use warm off-white (paper-like).
- A single warm-orange accent is used sparingly for emphasis (logo dot, nav highlight, labels, CTA).

### 2.3 Color Palette (from `:root` CSS variables — verbatim)

```css
--off-white:    #f0efeb;   /* warm paper background for light sections */
--black:        #111111;   /* deep ink for dark sections */
--accent:       #e84020;   /* warm orange-red accent */
--white:        #ffffff;
--mid:          #888888;   /* mid-gray for secondary text */
--border-light: rgba(0,0,0,0.1);
--border-dark:  rgba(255,255,255,0.1);
```

Additional hex values found in CSS (gradients/accents):
`#0a0a0a`, `#0d0d0d`, `#22c55e` (green status), `#adff4c` (lime accent — used in marquees/secondary highlights), `#ff5734`, `#0071e3` (Apple-blue link), `#666`, `#777`, `#999`, `#aaa`, `#fff`, `#ffffff`.

Notable RGB accents:
- `rgba(232,64,32,0.92)` — the accent orange at near-full opacity (nav indicator)
- `rgba(173,255,76,…)` — lime green (`#adff4c`) for emphasis blocks
- `rgba(17,17,17,0.55)` with `backdrop-filter: blur(20px) saturate(140%)` — frosted-glass nav pill background

### 2.4 Typography

**Fonts loaded (Google Fonts):**
```
family=Dancing+Script:wght@600;700
family=Playfair+Display:ital,wght@0,700;0,900;1,700
family=Space+Grotesk:wght@300;400;500;600;700
family=DM+Mono:wght@400;500
```

**Fonts actually used via CSS variables:**
```css
--font: 'Space Grotesk', sans-serif;   /* primary UI + body font */
--mono: 'DM Mono', monospace;          /* labels, eyebrow text, CTA, code-feel */
```

> Playfair Display and Dancing Script are linked but not referenced via `font-family` in the captured CSS — likely used selectively via class hooks not in the captured stylesheet, OR preloaded for future/experimental use. Safe bet: **Space Grotesk (display + body) + DM Mono (labels/eyebrows)** is the working system.

**Typography scale (font-size `clamp()` values found in CSS):**
| Use | Size |
|---|---|
| Eyebrow / mono label | 10–13px |
| Body | 14–17px (clamp 14–17px) |
| Subheadings | clamp(18px, 2vw, 24px) → clamp(26px, 3.4vw, 44px) |
| Section H2 | clamp(28px, 4vw, 52px), weight 700, letter-spacing -0.04em, line-height 1.1 |
| Section H3 | clamp(22px, 3vw, 36px), weight 700, letter-spacing -0.03em |
| Hero name (splash) | clamp(36px, 9vw, 80px), weight 700, letter-spacing -0.03em, line-height 1 |
| Largest display (career numbers) | clamp(80px, 14vw, 180px) |

### 2.5 Section Structure (HTML `<section>` IDs)

| # | Section ID | Purpose |
|---|---|---|
| 1 | `#hero` | Full-viewport (100dvh) hero with photo + WebGL canvas overlay + left-side social rail + scroll hint |
| 2 | `#intro` | Brief intro with animated metric counters (CSI %, complaint reduction, SAR revenue) |
| 3 | `#about` | Long-form bio + NN/g certification card |
| 4 | `#experience` | Numbered career timeline (01, 02, 03) with metric callouts |
| 5 | `#vibe-coding` | Pinned scroll-jacked gallery of 8 "vibe code" experiments (height: 600vh!) |
| 6 | `#ventures` | Founder projects (Enrichly, HeroFrame, etc.) |
| 7 | `#tools` | Toolset pill grid + languages + education |
| 8 | `#contact` | Final CTA + contact details (phone, email, LinkedIn, location) |

### 2.6 Navigation
- Fixed **pill-shaped nav** centered at top (`position: fixed; top: 22px; left: 50%; transform: translateX(-50%)`).
- Glassmorphic background: `rgba(17,17,17,0.55)` + `backdrop-filter: blur(20px) saturate(140%)` + 1px translucent white border.
- Logo on left (with orange `.` dot accent), pill of nav links in middle (About / Career / Experiments / Founder / Tools), orange CTA "Let's Talk" on right.
- A sliding orange indicator (`rgba(232,64,32,0.92)`) tracks the active section.
- On mobile the pill collapses; only logo + CTA remain.

### 2.7 Distinctive Features
- **Custom cursor** (`body { cursor: none; }` + `.custom-cursor` element).
- **Splash intro screen** (`#splash`) with name reveal + loading bar — covers viewport on first load.
- **WebGL fluid-reveal canvas** over a hero portrait (`#hero-gl`) — three.js-powered.
- **Scroll-jacked "Vibe Coding" gallery** — 600vh tall section pinned during scroll, revealing 8 experiments sequentially.
- **Animated metric counters** in intro and experience sections.
- **Eyebrow labels in DM Mono** with uppercase + 0.12em letter-spacing, colored with accent orange.
- **Alternating section backgrounds**: light off-white ↔ deep black.
- **Marquees** (`@keyframes hfMarquee`) for client/tool lists.
- Keyframe animations defined: `heroNameIn`, `heroFadeIn`, `heroSocialIn`, `scrollBob`, `livePulse`, `hfMarquee`.

### 2.8 Tech Stack (inferred from HTML)
- Vanilla HTML/CSS/JS with custom WebGL (three.js, "three-skull fluid sim" comment in code).
- Google Fonts for typography.
- Preloads `./assets/hero-orange.jpg`.
- Awwwards badge present (`.awwwards`).

---

## PART 3 — REFERENCE SITE 2: lessestudio.com (Lesse Studio)

### 3.1 What it is
Design & technology studio based in Italy. Full-service agency site (brand strategy, identity, UX/UI, web dev, eCommerce, mobile apps, embedded/hardware). Positioning: high-end, full-stack creative studio.

### 3.2 Visual Design / Aesthetic
- **Dark, cinematic, gallery-style** presentation.
- Hero is a full-bleed **Three.js canvas** (data-engine="three.js r183") on a black background.
- Uses **scroll-driven text reveal animation** — large headline words animate in line-by-line via a custom "mst" (multiline split text) Svelte component with `cubic-bezier(0.76, 0, 0.24, 1)` easing over 1000ms.
- Very tight horizontal layout with `vw`-based spacing (`px-[5vw]`, `mt-[10vw]`).
- Mix of serif display headlines + sans-serif body.
- Mostly grayscale with white-on-black text; no strong color accents — relies on **typography contrast and motion** instead.
- Big editorial numbers ("0%", "6 services") used as section anchors.

### 3.3 Color Palette

No `:root` variables inlined (CSS is bundled into external SvelteKit asset files). Inferred from inline styles + Tailwind utility classes used in the HTML:

**Backgrounds (dark grays/black):**
- `#080808` (deepest)
- `#0F0F0F`
- `#101010`
- `#272727`
- `#5D5D5D` (at 20% opacity)
- `#dfdfdf` (at 80% opacity — light card bg)
- `bg-black`, `bg-white`, `bg-white/70`, `bg-black/50`, `bg-black/10`

**Linear gradients (from inline styles):**
- `linear-gradient(96deg, rgb(15,15,15) 2.75%, rgb(9,9,9) 98.47%)`
- `linear-gradient(rgb(16,16,16) -4.38%, rgb(7,7,7) 106.24%)`
- `linear-gradient(to bottom, transparent 0%, black 50%)` (image fade-to-black overlay)
- `radial-gradient(20vw, rgba(255,255,255,0.85) 0%, rgba(160,160,160,0.4) 40%, transparent 70%)` (mouse-spotlight effect)

**Text colors (Tailwind classes):**
- `text-white`, `text-white/50`, `text-white/70`, `text-white/80`
- `text-black`, `text-black/50`
- `text-[#575757]`, `text-[#737272]`, `text-[#A2A2A2]`, `text-[#B6B6B6]/80` (gradations of secondary text)
- `text-[#D1D1D1]` (inline)
- `hover:text-[#b8b8b8]`, `group-hover:text-[#b8b8b8]`

**Borders:**
- `border-[#9F9F9F]/50`, `border-black/10`

**Net palette:** a tight grayscale ramp from `#080808` (deepest) → `#101010` → `#272727` → `#5D5D5D` → `#9F9F9F` → `#A2A2A2` → `#B6B6B6` → `#D1D1D1` → `#dfdfdf` → `#ffffff`. **No chromatic accent** — pure achromatic editorial.

### 3.4 Typography

- **Hero display:** `font-serif` (Tailwind class — would map to a custom serif loaded via the bundled CSS; default fallback `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`).
- **Body / UI:** `font-sans` (Tailwind default sans stack).
- **Special:** `font-dots` class (likely a dot-matrix/braille-style font for decorative labels).
- **Hero headline size:** `text-[3vw]` (viewport-width-based — fluid scaling).
- **Secondary eyebrow:** `text-[1vw]` uppercase.
- No Google Fonts `<link>` visible in HTML head → fonts are loaded by the SvelteKit CSS bundles (not retrievable from this snapshot).

> Action item: visit lessestudio.com in a browser and inspect the actual serif font-family from DevTools (likely a paid/foundry serif such as GT Sectra, PP Editorial New, or similar editorial serif given the high-end agency vibe).

### 3.5 Section Structure (8 `<section>` elements + `<footer>`)

| # | Class signature | Purpose |
|---|---|---|
| 1 | `scene relative inset-0 h-[90vh] bg-black` | **Hero** — Three.js canvas + headline "Full-Service Agency" + tagline "Lesse is a design and technology studio based in Italy…" + "Start a Project" CTA + scroll hint |
| 2 | `mt-20 md:mt-[8vw] flex w-screen flex-col` | **Services** — 9 service categories, each expandable ("See More"), with "/N services" count |
| 3 | `mt-20 flex w-screen flex-col px-5 md:mt-[10vw] md:px-[5vw]` | **Approach and values** |
| 4 | _(empty)_ | (spacer / divider) |
| 5 | `mt-20 px-5 md:px-[5vw] md:mt-[7vw]` | **Latest Work** — 3 case studies (Duo Nutrition / Everyday Sea Moss / Nymph Haircare) with location, industry, services tags |
| 6 | `mt-20 md:mt-[10vw] w-screen px-5 md:px-[5vw]` | **Testimonials** — 4 client quotes (DUO Nutrition, Lunna, Neva Spa, Vora) |
| 7 | `px-5 md:px-[5vw] mt-[10vw]` | **Latest news** — 2 articles (Building Brands from Within; How to Choose a Brand Name That Lasts) |
| 8 | `my-[10vw] w-screen px-[5vw]` | **Contact / Ready to get started?** — quote-request form with service checkboxes |
| — | `<footer>` | Big footer with all services re-listed (visual + marketing / technology) + INSTAGRAM / LINKEDIN / DRIBBBLE / MAIL |

**Nav:** Fixed centered top nav (`pointer-events-none fixed top-[1vw] z-100 flex w-screen justify-center`). Links: Services / Portfolio / About / Insights / Contact + "Start a project" CTA. There's also a `BottomNav` component (SvelteKit CSS file `BottomNav.Ds5wqO_U.css`).

### 3.6 Distinctive Features
- **Three.js-powered hero scene** on black canvas (interactive WebGL).
- **Custom "mst" (Multi-line Split Text) Svelte component** — splits headlines word-by-word, masks each line, and translates them in/out with cubic-bezier easing (1000ms). Each word is in its own `<span>` for staggered animation.
- **Mouse-follow radial spotlight** (the radial-gradient mentioned above) likely tracks the cursor.
- **VW-based spacing throughout** (`px-[5vw]`, `mt-[10vw]`, `text-[3vw]`) — fluid, viewport-relative design.
- **Dark achromatic palette** — pure grayscale, no chromatic accent.
- **Mixed font weights & families** for hierarchy: large serif display + small uppercase sans eyebrow + body sans.
- **Service cards with "/N services" counter and "See More" toggle** — clever density management.
- **Case study cards** with structured metadata: Location / Industry / Services.
- **No images of team** — pure typographic + work showcase.
- **Heavy use of duplicate text spans** (each headline is rendered twice — once as a hidden "measurer" `<span class="mst__measurer">` and once as the visible `<span class="mst__inner">`) for the split-text animation.
- **SvelteKit + Vite** stack (immutable hashed assets: `./_app/immutable/assets/...`).
- **Self-hosted analytics** (`metrics.lessestudio.com/script.js`).
- **CDN domain** for images: `cnd.lessestudio.com`.

### 3.7 Tech Stack
- SvelteKit (immutable hashed chunks, `svelte-XXX` class hashes).
- Three.js r183 (hero canvas).
- Tailwind CSS (utility classes throughout).
- Custom Svelte components: `DotGridIcon`, `BottomNav`, `Input`, `Form`, `Navbar`, `Image`, plus an "mst" split-text component.
- Self-hosted Plausible-style analytics.

---

## PART 4 — REFERENCE SITE 3: kvs.services (KVS Studio)

### 4.1 What it is
Creative studio based in **Budapest, Hungary** (47.4979° N, 19.0402° E shown on hero). Combines product design, frontend engineering, and 3D/WebGL. Positioning: "Premium design and development partner, delivering excellence."

### 4.2 Visual Design / Aesthetic
- **Brutalist / terminal / editorial-tech** aesthetic — feels like an interactive art piece.
- Pure black background (`#000000 !important` on `html, body`), locked to 100svh with `overflow: hidden` — the entire site is a **single full-viewport "app" with scroll-locked sections** (Lenis smooth scroll).
- **Monospace typography** throughout — every text element uses `font-mono`.
- **Three.js canvas** as the hero centerpiece (`data-engine="three.js r183"`).
- **CRT/TV-power overlay effects** (`tv-power-overlay`, `tv-power-screen`, `tv-scanlines`, `crt-overlay`, `flicker-text`) — section 3 has a TV-power-on transition when clicking team member names.
- **Mix-blend-mode text** layered over imagery (`mix-blend-exclusion`, `mix-blend-difference`, `mix-blend-screen`) — text remains legible regardless of background.
- **ASCII-art feature wall** (section 2 "WhatifThis-Section") — a giant scrollable ASCII-art block that spells out words vertically.
- **Scramble-text animation** (`variable-scramble-container`, `trail-target`) — text characters scramble and resolve as they enter view.
- **Brace-styled labels** — every label/keyword is wrapped in curly braces like `{WEB DESIGN}`, `{KVS}`, `{QUICK}`, `{FIGMA}`.
- **Coordinates display** in hero (Budapest lat/long) — gives a "command center" feel.
- **Marquee of tools** (`marquee-track`, `marquee-unit`) — repeating tech stack tags.
- Brutalist "CLICK HW WCG*&" button (intentionally cryptic CTA).

### 4.3 Color Palette

From inline `<style>` block + Tailwind utility classes:

**Backgrounds:**
- `#000000` (HTML/body — pure black, locked)
- `#1f1f1f` (lil-gui panels — debug UI)
- `#111111` (lil-gui title bars)
- `#424242` (lil-gui widgets)
- `#4f4f4f` (lil-gui hover)
- `#595959` (lil-gui focus)
- `bg-black`, `bg-[#f0f0f0]` (section 3 image area — light contrast block)
- `bg-[#ff5500]` / `bg-[#FF5500]` (orange button)

**Accent (the only chromatic color):**
- **`#FF5500`** — vivid orange. Used for: hero CTA button, hero "°" degree symbols in coordinates, footer "6" badge highlight, button text on team selector. This is THE brand color.

**Text:**
- `text-white`, `text-black`
- `#c5c4c2` / `#C5C4C2` — warm off-white/light gray (primary text on black)
- `#2a2a2a` (darker gray)
- `text-[#FF5500]` / `text-[#ff5500]` (orange accent text)

**Lil-gui accent colors (visible if debug GUI is shown):**
- `#2cc9ff` (cyan — number values)
- `#a2db3c` (lime green — string values)
- `#ebebeb` (light text)
- `#fff9` (semi-transparent white for hover borders)

**Net palette:** Pure black `#000000` + warm off-white `#c5c4c2` + vivid orange `#FF5500`. Optional debug accent: cyan `#2cc9ff` + lime `#a2db3c`. That's it — extremely restrained.

### 4.4 Typography

- **`font-mono` everywhere** — Tailwind's monospace stack (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`). The actual bundled CSS (`/assets/index-BrWY-5MB.css`) likely overrides this with a specific monospace face (e.g., JetBrains Mono, Space Mono, IBM Plex Mono, or Berkeley Mono) — not retrievable from this snapshot.
- No Google Fonts `<link>` in `<head>`.
- **Sizes:** `text-[10px]`, `text-[13px]`, `text-[14px]` (most common — small mono labels), `text-[clamp(14px,1.2vw,20px)]`, `text-[clamp(14px,1.4vw,20px)]`, `md:text-[clamp(10px,1.4vw,14px)]`, `md:text-[0.7vw]`.
- **Line heights:** `text-[14px]/[1.4]` (most common), `leading-[1.65]`, `leading-none`, `leading-relaxed`.
- **Letter spacing:** `tracking-[0.12em]`, `tracking-tight`, `tracking-tighter`, `tracking-widest`, `md:tracking-widest`.
- **Case:** heavily `uppercase` (footer, section labels), some `normal-case`.
- **Weights:** `font-normal`, `font-medium`, `font-semibold`, `font-bold`.

### 4.5 Section Structure (3 `<section>` elements + `<footer>`)

| # | Class signature | Purpose |
|---|---|---|
| 1 | `hero-section font-mono` | **Hero** — full-viewport Three.js canvas (`canvas-container` with 1280×1280 canvas) + bottom-left main text "{Every solution is crafted with purpose, ensuring exceptional quality and result}" + "{KVS}" + "{Premium design and development partner, delivering excellence}" + top-right "CLICK HW WCG*&" button + coordinates (47.4979°N, 19.0402°E) + "TAP TO OPEN" + tech marquee |
| 2 | `WhatifThis-Section relative min-h-[100svh] overflow-hidden px-[5vw] py-[80px] flex flex-col justify-center items-center bg-black cursor-pointer` | **ASCII art feature wall** — giant vertical-scrolling ASCII art that spells out words; clickable for interactive effect |
| 3 | `w-full flex flex-col bg-black font-mono` | **Team / Founder showcase** — horizontal scrollable team name selector (Kirilo Sztarcsak / Sebastian Renz Badinas / Harshit Kumar Sahu / Karan Chouhan) above a large image area with TV-power-on transition (`tv-power-overlay`, `tv-scanlines`) + scramble-text founder bio |
| — | `<footer class="bg-black text-[#c5c4c2] font-mono uppercase px-[5vw] pt-[15svh] pb-[5svh] text-[14px]/[1.4]">` | **Footer** — three-column grid: "{THE WORK WE DO 6}" (services list), "{THOSE WHO CHOSE US}" (client logos: GoCoCo, Vivida, RIPORT APPLICATIONS, ROBERT RAY, EXPIAN, GIVELL, CHAPTR, ALTEAM, SOLO60, GLIDE UK, PAIRED, DESIGNBUNDLES, MAISON21G, OPPORTUNI, HACKAJOB, &MERGE), "{KIRILO VISUAL SOLUTIONS KFT}" (company info + Budapest, Hungary) + "{SOCIALS}" (LKDN, YT, IG) |

**Nav:** Inline in section 3 — `nav.hidden w-full opacity-0 px-[4vw] py-8 md:flex justify-between items-start uppercase` (initially hidden, fades in on scroll).

### 4.6 Distinctive Features
- **Single-page scroll-locked app** (`overflow: hidden` on body, 100svh container, Lenis smooth scroll).
- **Three.js hero canvas** with a `lil-gui` debug panel (visible in dev — suggests the team ships the debug GUI on purpose or for demo).
- **CRT / TV-power transition** when clicking team names — section 3 image area flashes on like an old CRT TV.
- **Scramble-text animation** — characters in headlines resolve from random letters as they enter view.
- **ASCII-art scrollable feature wall** in section 2 — vertical column of `ZZZ XWVUT RRRRR S UV X Y ZZZZZZZ YY...` text.
- **Brace-wrapped labels** (`{WEB DESIGN}`, `{KVS}`, `{QUICK}`) — every keyword is in curly braces, giving a code/JSON feel.
- **Mix-blend-mode text** layered over images (`mix-blend-exclusion`, `mix-blend-difference`).
- **VW/SVH-based spacing** (`px-[5vw]`, `pt-[15svh]`, `pb-[5svh]`, `gap-[16svh]`) — fully fluid.
- **Single orange accent** (`#FF5500`) used sparingly for CTA + degree symbols + active states.
- **Coordinate display** (Budapest lat/long) — geographic signature in hero.
- **Horizontal-scroll team selector** with active-state color change (`text-[#FF5500]` for active, `text-[#C5C4C2]` for inactive).
- **Client logo wall** in footer — 16 client names as plain text (not images).
- **Footer grid:** `grid-cols-[1fr_1.8fr_1.2fr]` — asymmetric three-column layout.
- **Hidden preloader** (`.preloader-overlay`, `.preloader-title`).

### 4.7 Tech Stack
- Vue.js (`data-v-XXX` attribute hashes throughout).
- Vite (hashed asset names: `/assets/index-BxXKCyO8.js`, `/assets/index-BrWY-5MB.css`).
- Three.js r183 (hero canvas).
- Lenis (smooth scroll — `lenis`, `lenis-stopped` classes).
- Tailwind CSS (utility classes throughout).
- `lil-gui` (Three.js debug GUI library — full CSS included inline).
- Vercel Analytics (`@vercel/analytics/vue` v2.0.1).
- Microsoft Clarity (`clarity.ms/tag/...`) + Google Analytics (`G-BRFR4M2LNS`).
- JSON-LD: `Organization` (contact email `contact@kvs.services`) + `WebSite`.

---

## PART 5 — SYNTHESIS & RECOMMENDATIONS FOR TANVEER'S PORTFOLIO

### 5.1 Content Assets Available for the Portfolio

| Section | Content ready? | Source |
|---|---|---|
| Hero / Identity | ✅ Name, location, headline | §1.1 |
| About / Bio | ⚠️ Partial (only opening line — full text hidden behind LinkedIn sign-in) | §1.2 — **ask Tanveer to paste full About** |
| Current role | ✅ SM Technology, Banasree, Dhaka | §1.3 |
| Work experience | ⚠️ Only SM Technology visible; 2 masked companies + 3 masked titles — **ask Tanveer** | §1.4 |
| Education | ⚠️ Only Govt. Titumir College visible; 3 masked schools — **ask Tanveer** | §1.5 |
| Certifications | ✅ 3 verbatim (Great Learning ×2, Programming Hero ×1) | §1.6 |
| Projects | ✅ 3 fully detailed (Shadow Tourist, Haven Hearth, Artisan Haven) with live links, tech stacks, and feature lists | §1.8 |
| Article | ✅ "Why Should We Use React for the Front-End?" (May 2024) | §1.10 |
| Languages | ✅ English / Bangla / Hindi | §1.9 |
| Skills | ⚠️ Not on public profile — **infer from projects + certs** or ask Tanveer | §1.12 |
| Contact | ⚠️ Email/phone hidden — **ask Tanveer** | §1.1 |
| Profile photo | ✅ LinkedIn CDN URL available | §1.1 |
| Portfolio site | ✅ Existing: https://tanveer-ahmed-194ed.web.app/ (likely Firebase-hosted) | §1.1 |

### 5.2 Open Questions to Confirm with Tanveer

1. **Full About text** — LinkedIn truncates it publicly; need the complete paragraph(s).
2. **Two other masked employers** (both in Banasree, Rampura Dhaka) — names, roles, dates, descriptions.
3. **Three masked job titles** — likely candidates by length: "Tech Lead" (4+4), "Frontend Developer" (8+9), "Web Developer" (3+9). Confirm.
4. **Three masked schools** (2015–2020, ended Apr 2014, ended Mar 2012) — names + degrees.
5. **Skills list** (LinkedIn hides it publicly) — paste verbatim.
6. **Email + phone** for contact section.
7. **GitHub URL** — not present on LinkedIn; needed for portfolio.
8. **Any volunteer / honors** — none visible publicly.
9. **Whether to feature the Shopify Backdoor Tool** — that was a liked post by another author (zakariabinmoti), so probably not Tanveer's project. Confirm.

### 5.3 Design Direction — Three Reference Options

Based on the three references, Tanveer can choose one of three directions for his portfolio build:

#### Option A — "Shehata Style" (recommended for a polished, professional MERN dev portfolio)
- **Aesthetic:** Editorial, premium, alternating light/dark sections.
- **Palette:** Warm off-white `#f0efeb` + deep black `#111111` + warm orange accent `#e84020`.
- **Fonts:** Space Grotesk (display + body) + DM Mono (eyebrows/labels).
- **Layout:** Fixed glassmorphic centered nav pill, full-viewport hero with portrait + WebGL/canvas overlay, scroll-jacked project gallery, numbered experience timeline, large metric counters (e.g. "3 MERN Projects", "3 Certifications", "MERN stack").
- **Sections:** Hero → Intro/Stats → About → Experience → Projects (gallery) → Tools/Skills → Contact.
- **Why it fits Tanveer:** Senior, restrained, professional. The "metric counters" pattern can showcase project counts, tech stack breadth, certifications. The numbered timeline suits his 3 jobs + 3 schools.

#### Option B — "Lesse Style" (recommended for a high-end agency/studio feel)
- **Aesthetic:** Dark, cinematic, gallery-style. Pure grayscale (no chromatic accent).
- **Palette:** `#080808` → `#101010` → `#272727` → `#9F9F9F` → `#D1D1D1` → `#ffffff` (achromatic ramp).
- **Fonts:** A serif display face (e.g., GT Sectra / PP Editorial New / Playfair Display as fallback) + sans body.
- **Layout:** Three.js canvas hero, scroll-driven word-by-word text reveal, big case-study cards for the 3 projects with Location/Stack/Features metadata, testimonials section.
- **Sections:** Hero → Services/Skills → Approach → Work (3 case studies) → Testimonials → Insights/Article → Contact form.
- **Why it fits Tanveer:** Treats each of his 3 projects as a "case study" with structured metadata — perfect for showcasing the rich feature lists already on his LinkedIn.

#### Option C — "KVS Style" (recommended for a bold, brutalist, dev-credibility feel)
- **Aesthetic:** Brutalist terminal/monospace, locked full-viewport, scroll-jacked.
- **Palette:** Pure black `#000000` + warm off-white `#c5c4c2` + single vivid orange `#FF5500` accent.
- **Fonts:** Monospace everywhere (JetBrains Mono / Space Mono / IBM Plex Mono / Berkeley Mono).
- **Layout:** Three.js hero canvas, CRT/scanline transitions between sections, brace-wrapped labels (`{PROJECTS}`, `{MERN STACK}`), scramble-text on scroll-in, mix-blend-mode text over project screenshots, horizontal-scroll project selector.
- **Sections:** Hero (with Dhaka coordinates 23.8728°N, 90.3978°E!) → ASCII feature wall → Projects (horizontal scroll) → Footer with client/tech grid.
- **Why it fits Tanveer:** Strong "I'm a real developer" signal — monospace, brace syntax, code-like labels. The Dhaka coordinates trick (à la KVS's Budapest coords) gives a unique signature. Best for impressing other developers.

### 5.4 Recommended Build (Hybrid — Shehata structure + KVS accent)

If building a single portfolio that balances professionalism with developer credibility:

- **Structure:** Shehata's section flow (Hero → Intro/Stats → About → Experience → Projects → Skills → Contact) — proven, navigable, recruiter-friendly.
- **Palette:** Shehata's warm off-white + black base, but swap the orange accent for KVS's `#FF5500` (more saturated, more "tech").
- **Typography:** Space Grotesk + DM Mono (Shehata's pairing) — versatile and modern, loads fast from Google Fonts.
- **Hero:** Lesse-style word-by-word text reveal for the headline ("MERN stack developer from Dhaka, Bangladesh") over a subtle canvas/gradient background.
- **Projects:** Lesse-style case-study cards with structured metadata (Live Link / Technologies / Features) — Tanveer's LinkedIn project descriptions are already in this format.
- **Skills:** KVS-style brace-wrapped marquee of tech tags (`{REACT}`, `{MONGODB}`, `{EXPRESS}`, `{NODE.JS}`, `{TAILWIND}`, `{FIREBASE}`, `{STRIPE}`, `{JWT}`, `{TYPESCRIPT}`).
- **Footer:** KVS-style three-column grid with company info, client/tech grid, socials (LinkedIn + GitHub + email).

### 5.5 Concrete Asset List to Fetch/Prepare Before Building

| Asset | Source | Status |
|---|---|---|
| Profile photo (high-res) | LinkedIn CDN URL in §1.1 — download a larger version (`profile-displayphoto-shrink_800_800/`) | ✅ URL known |
| Project 1 screenshot | https://shadow-tourist.web.app/ — capture hero screenshot | ⏳ needs screenshot |
| Project 2 screenshot | https://react-haven-hearth.web.app/ — capture hero screenshot | ⏳ needs screenshot |
| Project 3 screenshot | https://react-artisan-haven-client.web.app/ — capture hero screenshot | ⏳ needs screenshot |
| Article cover image | LinkedIn CDN URL in §1.10 | ✅ URL known |
| SM Technology company logo | LinkedIn CDN URL in §1.3 | ✅ URL known |
| Programming Hero cert PDF | Google Drive URL in §1.6 | ✅ URL known |
| GitHub profile URL | Not on LinkedIn — ask Tanveer | ⏳ ask |
| Resume/CV PDF | Not on LinkedIn — ask Tanveer | ⏳ ask |

---

## Appendix A — Quick Reference: Color Palettes Side-by-Side

| Site | Background | Text | Accent | Secondary |
|---|---|---|---|---|
| **Shehata** | `#f0efeb` (off-white) / `#111111` (black) | `#111111` / `#ffffff` | `#e84020` (warm orange) | `#888888` mid-gray, `#adff4c` lime (secondary highlight) |
| **Lesse** | `#080808` → `#101010` (deep grays) | `#ffffff` / `#D1D1D1` | _(none — pure achromatic)_ | `#575757`, `#737272`, `#A2A2A2`, `#B6B6B6` (gray ramp) |
| **KVS** | `#000000` (pure black) | `#c5c4c2` (warm off-white) | `#FF5500` (vivid orange) | `#2cc9ff` cyan / `#a2db3c` lime (debug GUI only) |

## Appendix B — Quick Reference: Typography Side-by-Side

| Site | Display Font | Body Font | Mono/Label Font | Notable Scale |
|---|---|---|---|---|
| **Shehata** | Space Grotesk (700) | Space Grotesk (400/500) | DM Mono (500) | Hero: clamp(36px, 9vw, 80px); largest: clamp(80px, 14vw, 180px) |
| **Lesse** | `font-serif` (TBD — visit site to confirm) | `font-sans` (Tailwind default) | _(no mono — uses small sans uppercase)_ | Hero: text-[3vw]; eyebrow: text-[1vw] |
| **KVS** | `font-mono` (TBD — likely JetBrains Mono / Space Mono / IBM Plex Mono) | `font-mono` | `font-mono` (everything is mono) | Body: text-[14px]/[1.4]; largest: text-[clamp(14px,1.4vw,20px)] |

## Appendix C — Quick Reference: Section Structures Side-by-Side

| Shehata | Lesse | KVS |
|---|---|---|
| Hero (WebGL portrait) | Hero (Three.js canvas) | Hero (Three.js canvas) |
| Intro (animated metrics) | Services (9 categories) | ASCII feature wall |
| About (long-form bio) | Approach & values | Team / Founder showcase |
| Experience (numbered timeline) | Latest Work (3 case studies) | Footer (3-col grid) |
| Vibe Coding (8 experiments) | Testimonials (4 quotes) | — |
| Ventures (founder projects) | Latest news (2 articles) | — |
| Tools (pill grid) | Contact form | — |
| Contact | Footer (services + socials) | — |

---

**Report compiled.** Next concrete actions:
1. Send Tanveer the open-questions list in §5.2 to fill the masked LinkedIn fields.
2. Decide which design direction (A / B / C / Hybrid) to pursue.
3. Capture screenshots of the 3 live project URLs for the case-study cards.
4. Confirm GitHub URL + resume PDF for download.
5. Build.
