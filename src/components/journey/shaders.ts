/**
 * Cinematic transition shader: blends two scene textures with mode-specific
 * GLSL reveals instead of a flat crossfade.
 *
 * mode 0 — depth-noise dissolve, bright LEDs punch through first
 * mode 1 — procedural smoke dispersion
 * mode 2 — rim-light push-in through a blown-out void
 * mode 3 — expanding hexagonal mesh mask
 */

export const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const fragmentShader = /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform sampler2D uTexA;
uniform sampler2D uTexB;
uniform float uBlend;
uniform int uMode;
uniform float uTime;
uniform float uScreenAspect;
uniform float uImgAspect;
uniform vec3 uCamA;      // pan.x, pan.y, zoom
uniform vec3 uCamB;
uniform float uAberration;
uniform float uGrain;

// ---- noise ------------------------------------------------------------
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * vnoise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// hexagonal cell id + distance to cell centre
vec2 hexCell(vec2 p) {
  vec2 s = vec2(1.0, 1.7320508);
  vec2 hc = floor(p / s) + 0.5;
  vec2 offA = p - hc * s;
  vec2 offB = p - (floor(p / s + 0.5) ) * s;
  return dot(offA, offA) < dot(offB, offB) ? hc : floor(p / s + 0.5);
}

float hexDist(vec2 p, out vec2 id) {
  vec2 s = vec2(1.0, 1.7320508);
  vec2 a = mod(p, s) - s * 0.5;
  vec2 b = mod(p - s * 0.5, s) - s * 0.5;
  vec2 gv = dot(a, a) < dot(b, b) ? a : b;
  id = p - gv;
  vec2 pa = abs(gv);
  return max(dot(pa, normalize(vec2(1.0, 1.7320508))), pa.x);
}

// ---- framing ----------------------------------------------------------
vec2 coverUv(vec2 uv, vec3 cam) {
  vec2 f = uScreenAspect > uImgAspect
    ? vec2(1.0, uImgAspect / uScreenAspect)
    : vec2(uScreenAspect / uImgAspect, 1.0);
  vec2 c = (uv - 0.5) * f;
  c /= max(cam.z, 0.001);
  return c + 0.5 + cam.xy;
}

vec3 sampleTex(sampler2D tex, vec2 uv, float ab) {
  vec2 dir = (uv - 0.5);
  float r = texture2D(tex, clamp(uv + dir * ab, 0.0, 1.0)).r;
  vec3 g = texture2D(tex, clamp(uv, 0.0, 1.0)).rgb;
  float b = texture2D(tex, clamp(uv - dir * ab, 0.0, 1.0)).b;
  return vec3(r, g.g, b);
}

vec3 blurSample(sampler2D tex, vec2 uv, float amount, float seed) {
  vec3 acc = vec3(0.0);
  for (int i = 0; i < 10; i++) {
    float fi = float(i);
    float ang = fi * 2.399963 + seed;
    vec2 o = vec2(cos(ang), sin(ang)) * amount * (0.35 + 0.65 * fract(fi * 0.37));
    acc += texture2D(tex, clamp(uv + o, 0.0, 1.0)).rgb;
  }
  return acc / 10.0;
}

void main() {
  vec2 uvA = coverUv(vUv, uCamA);
  vec2 uvB = coverUv(vUv, uCamB);
  float t = clamp(uBlend, 0.0, 1.0);
  float ab = uAberration;

  vec3 col;

  if (uMode == 0) {
    // depth-noise dissolve; bright blue LEDs of B punch through the void early
    float n = fbm(vUv * 3.4 + vec2(uTime * 0.02, -uTime * 0.015));
    float depth = 1.0 - smoothstep(0.0, 0.9, length(vUv - vec2(0.5)));
    float thr = t * 1.45 - 0.22 + n * 0.34 - depth * 0.18;
    vec3 a = sampleTex(uTexA, uvA, ab);
    vec3 b = sampleTex(uTexB, uvB, ab);
    float hazeIn = smoothstep(0.0, 0.55, t);
    a = mix(a, a * (1.0 - 0.85 * hazeIn), hazeIn);
    float lb = smoothstep(0.55, 0.95, luma(b));
    float m = smoothstep(0.32, 0.68, thr);
    col = mix(a, b, clamp(m + lb * smoothstep(0.05, 0.5, t) * 0.9, 0.0, 1.0));
  } else if (uMode == 1) {
    // smoke dispersion: A is torn apart by an advected noise field
    float amp = sin(t * 3.14159) * 0.09;
    float n = fbm(vUv * 2.6 + vec2(0.0, -uTime * 0.05));
    vec2 warp = vec2(fbm(vUv * 4.0 + n), fbm(vUv * 4.0 - n)) - 0.5;
    vec3 a = sampleTex(uTexA, uvA + warp * amp, ab);
    vec3 b = blurSample(uTexB, uvB + warp * amp * 0.4, amp * 0.35, 1.7);
    float thr = smoothstep(0.25, 0.8, t * 1.5 - 0.2 + n * 0.5);
    col = mix(a, b, thr);
  } else if (uMode == 2) {
    // push-in through the rim light: A's highlights bloom into a void, B resolves
    vec3 a = blurSample(uTexA, (uvA - 0.5) / mix(1.0, 2.4, t) + 0.5, t * 0.02, 0.7);
    float bright = smoothstep(0.18, 0.85, luma(a));
    // the rim light blooms outward and swallows the frame, guaranteeing a lit portal
    float bloom = smoothstep(0.05, 0.62, t) * mix(0.55, 1.0, bright);
    vec3 voidCol = mix(a, vec3(0.78, 0.85, 0.96), clamp(bloom, 0.0, 1.0));
    float n = fbm(vUv * 7.0 + uTime * 0.06);
    vec2 disp = (vec2(n, fbm(vUv * 7.0 - uTime * 0.05)) - 0.5) * (1.0 - t) * 0.12;
    vec3 b = blurSample(uTexB, uvB + disp, (1.0 - t) * 0.045, 3.1);
    col = mix(voidCol, b, smoothstep(0.34, 0.96, t));
  } else {
    // expanding hexagonal mesh mask
    vec2 id;
    float scale = mix(26.0, 9.0, t);
    float d = hexDist(vUv * vec2(uScreenAspect, 1.0) * scale, id);
    float jitter = hash(id * 0.137);
    float radial = length(vUv - vec2(0.5, 0.55)) * 1.25;
    float wave = t * 1.9 - radial - jitter * 0.28;
    float cell = smoothstep(0.0, 0.35, wave);
    float edge = smoothstep(0.5, 0.42, d) ;
    vec3 a = sampleTex(uTexA, uvA, ab);
    vec3 b = sampleTex(uTexB, uvB, ab);
    float lb = smoothstep(0.5, 0.9, luma(b)) * smoothstep(0.0, 0.45, t) * 0.85;
    float m = clamp(cell * mix(0.82, 1.0, edge) + lb, 0.0, 1.0);
    // thin glowing rim on the advancing mask front
    float front = smoothstep(0.02, 0.0, abs(wave - 0.16)) * (1.0 - smoothstep(0.9, 1.0, t));
    col = mix(a, b, m) + vec3(0.16, 0.42, 0.85) * front * (1.0 - d) * 0.8;
  }

  // vignette + fine film grain keep the composite cinematic
  float vig = smoothstep(1.18, 0.28, length((vUv - 0.5) * vec2(1.06, 1.0)) * 1.42);
  col *= mix(0.82, 1.0, vig);
  float g = hash(vUv * 1024.0 + fract(uTime) * 91.7) - 0.5;
  col += g * uGrain;

  gl_FragColor = vec4(col, 1.0);
}
`;
