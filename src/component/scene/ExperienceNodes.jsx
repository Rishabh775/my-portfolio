/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { portfolioData } from "../../data/portfolioData";

export default function ExperienceNodes() {
  const beamRef = useRef();
  const nodeRef = useRef();

  useFrame((state) => {
    beamRef.current.material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    nodeRef.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <group>
      <mesh ref={beamRef} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 8, 16]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.8}
          transparent
          opacity={0.5}
        />
      </mesh>

      <Float speed={2} floatIntensity={0.8}>
        <group ref={nodeRef} position={[0, 1.5, 0]}>
          <mesh>
            <dodecahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial
              color="#22c55e"
              emissive="#22c55e"
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.15}
              wireframe
            />
          </mesh>
          <mesh scale={1.3}>
            <dodecahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial
              color="#22c55e"
              emissive="#22c55e"
              emissiveIntensity={0.2}
              transparent
              opacity={0.3}
            />
          </mesh>
        </group>
      </Float>

      <group position={[0, -1.5, 0]}>
        <mesh>
          <octahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {portfolioData.achievements.map((_, i) => {
        const y = -2.5 - i * 1.2;
        return (
          <mesh key={i} position={[1.5, y, 0.5]}>
            <torusGeometry args={[0.25, 0.06, 8, 24]} />
            <meshStandardMaterial
              color={i === 0 ? "#fbbf24" : "#a855f7"}
              emissive={i === 0 ? "#fbbf24" : "#a855f7"}
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        );
      })}

      <pointLight position={[0, 1.5, 1]} intensity={1.5} color="#22c55e" distance={5} />
      <pointLight position={[0, -1.5, 1]} intensity={0.8} color="#f97316" distance={5} />
    </group>
  );
}
