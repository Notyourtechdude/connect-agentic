/**
 * Normalized scroll timeline (0 → 1) for the Agentic Force helmet journey.
 * Five fixed scenes joined by four shader transitions. Fully reversible.
 */

export type SceneDef = {
  key: string;
  kicker: string;
  title: string;
  copy: string;
  /** camera zoom keyframes across the scene's full life (in → out) */
  zoom: [number, number];
  /** camera pan keyframes, in normalized texture units */
  pan: [[number, number], [number, number]];
  /** chromatic aberration strength */
  aberration: number;
};

export const SCENES: SceneDef[] = [
  {
    key: "scene1",
    kicker: "01 — Hangar",
    title: "Perception",
    copy: "A cold, precise architecture. Somewhere inside it, the subject waits.",
    zoom: [1.0, 1.22],
    pan: [
      [0, 0],
      [0, -0.015],
    ],
    aberration: 0.0,
  },
  {
    key: "scene2",
    kicker: "02 — Atmosphere",
    title: "Focus",
    copy: "The room falls away. Only shadow, smoke, and a single line of blue.",
    zoom: [1.18, 1.04],
    pan: [
      [-0.03, 0.01],
      [0.03, -0.01],
    ],
    aberration: 0.0012,
  },
  {
    key: "scene3",
    kicker: "03 — Silhouette",
    title: "Form",
    copy: "Perspective drops overhead. Geometry, rim light, brushed metal.",
    zoom: [1.06, 1.26],
    pan: [
      [0.05, 0],
      [-0.05, 0.01],
    ],
    aberration: 0.0008,
  },
  {
    key: "scene4",
    kicker: "04 — Mesh",
    title: "Precision",
    copy: "Hexagon by hexagon. Tactile engineering at the threshold of touch.",
    zoom: [1.3, 1.02],
    pan: [
      [0, 0.02],
      [0, -0.02],
    ],
    aberration: 0.0035,
  },
  {
    key: "scene5",
    kicker: "05 — Integration",
    title: "Agentic Force",
    copy: "The helmet, resolved. Autonomous systems built for control.",
    zoom: [1.14, 1.02],
    pan: [
      [0, -0.01],
      [0, 0],
    ],
    aberration: 0.0006,
  },
];

export type Segment =
  | { kind: "scene"; index: number; from: number; to: number }
  | { kind: "transition"; a: number; b: number; mode: number; from: number; to: number };

/** mode 0 = depth-noise dissolve, 1 = smoke dispersion, 2 = rim-light push-in, 3 = hex mask */
export const SEGMENTS: Segment[] = [
  { kind: "scene", index: 0, from: 0.0, to: 0.15 },
  { kind: "transition", a: 0, b: 1, mode: 0, from: 0.15, to: 0.25 },
  { kind: "scene", index: 1, from: 0.25, to: 0.4 },
  { kind: "transition", a: 1, b: 2, mode: 1, from: 0.4, to: 0.5 },
  { kind: "scene", index: 2, from: 0.5, to: 0.65 },
  { kind: "transition", a: 2, b: 3, mode: 2, from: 0.65, to: 0.75 },
  { kind: "scene", index: 3, from: 0.75, to: 0.9 },
  { kind: "transition", a: 3, b: 4, mode: 3, from: 0.9, to: 1.0 },
];

/** Full camera life-span of each scene: from the transition that reveals it to the one that ends it. */
export const SCENE_SPANS: Array<[number, number]> = SCENES.map((_, i) => {
  const inSeg = SEGMENTS.find((s) => s.kind === "transition" && s.b === i);
  const outSeg = SEGMENTS.find((s) => s.kind === "transition" && s.a === i);
  return [inSeg ? inSeg.from : 0, outSeg ? outSeg.to : 1];
});

export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
export const smoothstep = (v: number) => {
  const t = clamp01(v);
  return t * t * (3 - 2 * t);
};
export const mix = (a: number, b: number, t: number) => a + (b - a) * t;

export type TimelineState = {
  a: number;
  b: number;
  mode: number;
  /** 0 = fully scene a, 1 = fully scene b */
  blend: number;
};

export function resolveTimeline(p: number): TimelineState {
  const t = clamp01(p);
  for (const seg of SEGMENTS) {
    if (t <= seg.to || seg === SEGMENTS[SEGMENTS.length - 1]) {
      if (seg.kind === "scene") return { a: seg.index, b: seg.index, mode: 0, blend: 0 };
      const local = (t - seg.from) / (seg.to - seg.from);
      return { a: seg.a, b: seg.b, mode: seg.mode, blend: clamp01(local) };
    }
  }
  return { a: 0, b: 0, mode: 0, blend: 0 };
}

/** Camera zoom + pan for one scene at global progress p. */
export function sceneCamera(index: number, p: number): [number, number, number] {
  const span = SCENE_SPANS[index] ?? [0, 1];
  const local = smoothstep((p - span[0]) / (span[1] - span[0]));
  const s = SCENES[index] ?? SCENES[0]!;
  return [
    mix(s.pan[0][0], s.pan[1][0], local),
    mix(s.pan[0][1], s.pan[1][1], local),
    mix(s.zoom[0], s.zoom[1], local),
  ];
}

/** Overlay copy opacity for a scene at global progress p. */
export function sceneCopyOpacity(index: number, p: number): number {
  const hold = SEGMENTS.find((s) => s.kind === "scene" && s.index === index) as
    | Extract<Segment, { kind: "scene" }>
    | undefined;
  if (!hold && index !== SCENES.length - 1) return 0;

  const inSeg = SEGMENTS.find((s) => s.kind === "transition" && s.b === index);
  const outSeg = SEGMENTS.find((s) => s.kind === "transition" && s.a === index);
  const fadeIn = 0.05;
  const start = inSeg ? mix(inSeg.from, inSeg.to, 0.4) : -fadeIn;
  const end = outSeg ? mix(outSeg.from, outSeg.to, 0.35) : 2;
  const fade = 0.05;
  const rise = smoothstep((p - start) / fade);
  const fall = 1 - smoothstep((p - (end - fade)) / fade);
  return clamp01(Math.min(rise, fall));
}
