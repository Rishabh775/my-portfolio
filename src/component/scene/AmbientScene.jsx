/* eslint-disable react/no-unknown-property, react/prop-types */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Grid, Stars } from "@react-three/drei";

export function ParticleField({ count = 1200 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#f97316"
        sizeAttenuation
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}

export function FloorGrid() {
  return (
    <Grid
      position={[0, -4, 0]}
      args={[40, 40]}
      cellSize={0.6}
      cellThickness={0.4}
      cellColor="#1f1f2e"
      sectionSize={3}
      sectionThickness={1}
      sectionColor="#f97316"
      fadeDistance={28}
      fadeStrength={1.2}
      infiniteGrid
    />
  );
}

export function BackgroundStars() {
  return (
    <Stars
      radius={80}
      depth={60}
      count={3000}
      factor={3}
      saturation={0.2}
      fade
      speed={0.4}
    />
  );
}

export function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[8, 8, 5]} intensity={1.2} color="#f97316" />
      <directionalLight position={[-6, -4, 4]} intensity={0.6} color="#ec4899" />
      <pointLight position={[0, 2, 4]} intensity={1} color="#f97316" />
      <pointLight position={[-4, -2, 2]} intensity={0.5} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.35}
        penumbra={1}
        intensity={0.8}
        color="#ffffff"
      />
    </>
  );
}
