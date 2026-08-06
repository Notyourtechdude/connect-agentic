import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./shaders";
import { SCENES, resolveTimeline, sceneCamera } from "./timeline";

import s1 from "@/assets/scene1.webp.asset.json";
import s2 from "@/assets/scene2.webp.asset.json";
import s3 from "@/assets/scene3.webp.asset.json";
import s4 from "@/assets/scene4.webp.asset.json";
import s5 from "@/assets/scene5.webp.asset.json";
import s1m from "@/assets/scene1-sm.webp.asset.json";
import s2m from "@/assets/scene2-sm.webp.asset.json";
import s3m from "@/assets/scene3-sm.webp.asset.json";
import s4m from "@/assets/scene4-sm.webp.asset.json";
import s5m from "@/assets/scene5-sm.webp.asset.json";

const IMG_ASPECT = 1920 / 1013;

function Stage({ progress, urls }: { progress: MutableRefObject<number>; urls: string[] }) {
  const textures = useTexture(urls);
  const { viewport, size } = useThree();
  const matRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTexA: { value: textures[0] },
      uTexB: { value: textures[0] },
      uBlend: { value: 0 },
      uMode: { value: 0 },
      uTime: { value: 0 },
      uScreenAspect: { value: size.width / size.height },
      uImgAspect: { value: IMG_ASPECT },
      uCamA: { value: new THREE.Vector3(0, 0, 1) },
      uCamB: { value: new THREE.Vector3(0, 0, 1) },
      uAberration: { value: 0 },
      uGrain: { value: 0.035 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useMemo(() => {
    for (const t of textures) {
      t.colorSpace = THREE.SRGBColorSpace;
      t.minFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
    }
  }, [textures]);

  useFrame((state) => {
    const mat = matRef.current;
    if (!mat) return;
    const p = progress.current;
    const { a, b, mode, blend } = resolveTimeline(p);
    const u = mat.uniforms as Record<string, { value: unknown }>;
    u["uTexA"]!.value = textures[a] ?? textures[0];
    u["uTexB"]!.value = textures[b] ?? textures[0];
    u["uBlend"]!.value = blend;
    u["uMode"]!.value = mode;
    u["uTime"]!.value = state.clock.elapsedTime;
    u["uScreenAspect"]!.value = state.size.width / state.size.height;

    const camA = sceneCamera(a, p);
    const camB = sceneCamera(b, p);
    (u["uCamA"]!.value as THREE.Vector3).set(camA[0], camA[1], camA[2]);
    (u["uCamB"]!.value as THREE.Vector3).set(camB[0], camB[1], camB[2]);

    const abA = SCENES[a]?.aberration ?? 0;
    const abB = SCENES[b]?.aberration ?? 0;
    u["uAberration"]!.value = abA + (abB - abA) * blend;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function Experience({
  progress,
  mobile,
}: {
  progress: MutableRefObject<number>;
  mobile: boolean;
}) {
  const urls = mobile
    ? [s1m.url, s2m.url, s3m.url, s4m.url, s5m.url]
    : [s1.url, s2.url, s3.url, s4.url, s5.url];

  return (
    <Canvas
      dpr={mobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <Stage progress={progress} urls={urls} />
    </Canvas>
  );
}
