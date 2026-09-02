"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  // Bypass camera matrices to fill the screen perfectly with a 2x2 plane
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  // Correct aspect ratio so noise isn't stretched
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;
  
  // Very slow, soft wavy distortion
  float noiseValue = snoise(vec2(uv.x * 0.8 + uTime * 0.04, uv.y * 0.8 - uTime * 0.06));
  float noiseValue2 = snoise(vec2(uv.x * 1.2 - uTime * 0.02, uv.y * 1.2 + uTime * 0.03));
  
  // Combine noises to create soft fluid
  float finalNoise = (noiseValue + noiseValue2) * 0.5;
  
  // Map noise to 0..1 range
  float intensity = finalNoise * 0.5 + 0.5;
  
  // Soften the contrast to make it smoky
  intensity = smoothstep(0.2, 0.8, intensity);
  
  // Lime green highlight color exactly like Wibify
  vec3 highlightColor = vec3(0.5, 0.9, 0.1); 
  
  // Fade out heavily at the edges so it seamlessly blends into the CSS background
  vec2 center = vec2(0.5 * aspect, 0.5);
  float dist = distance(uv, center);
  float vignette = smoothstep(1.5, 0.0, dist);
  
  // Use alpha blending instead of hardcoding the dark background color
  float alpha = intensity * vignette * 0.35; // Adjust the 0.35 for overall opacity
  
  gl_FragColor = vec4(highlightColor, alpha);
}
`;

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(typeof window !== "undefined" ? window.innerWidth : 1000, typeof window !== "undefined" ? window.innerHeight : 1000) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      if (state.size.width !== materialRef.current.uniforms.uResolution.value.x ||
          state.size.height !== materialRef.current.uniforms.uResolution.value.y) {
        materialRef.current.uniforms.uResolution.value.set(state.size.width, state.size.height);
      }
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}

export function WibifyBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
      {/* Limit DPR to 1. A blurry shader doesn't need retina resolution, this saves massive GPU overhead */}
      <Canvas dpr={1}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
