import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Cloud({ count, mobile }: { count: number; mobile: boolean }) {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 3.4;
      const t = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4.2;
      pos[i * 3 + 0] = Math.cos(t) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(t) * r * 0.6;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.045;
    points.current.rotation.x = Math.sin(t * 0.12) * 0.08;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={mobile ? 0.026 : 0.02}
        color={new THREE.Color("#5aa8ff")}
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Ambient particle field used behind the closing CTA. Lazy-loaded, client-only. */
export function ParticleField({ mobile = false }: { mobile?: boolean }) {
  return (
    <Canvas
      dpr={mobile ? [1, 1.4] : [1, 1.8]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 6], fov: 50 }}
    >
      <Cloud count={mobile ? 700 : 1500} mobile={mobile} />
    </Canvas>
  );
}
