/* eslint-disable react/no-unknown-property, react/prop-types */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { portfolioData } from "../../data/portfolioData";

function ProjectCard({ project, index, total }) {
  const ref = useRef();
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = 3.2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame((state) => {
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8 + index * 1.2) * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref} position={[x, 0, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
        <RoundedBox args={[1.8, 1.1, 0.08]} radius={0.06} smoothness={4}>
          <meshStandardMaterial
            color={project.accent}
            emissive={project.accent}
            emissiveIntensity={0.2}
            metalness={0.7}
            roughness={0.25}
            transparent
            opacity={0.85}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.6, 0.9]} />
          <meshStandardMaterial
            color="#0a0a0f"
            emissive={project.accent}
            emissiveIntensity={0.08}
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
        <mesh position={[0, -0.75, 0]}>
          <boxGeometry args={[0.08, 0.3, 0.08]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ProjectNodes() {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={groupRef}>
      {portfolioData.projects.map((project, i) => (
        <ProjectCard
          key={project.name}
          project={project}
          index={i}
          total={portfolioData.projects.length}
        />
      ))}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
        <ringGeometry args={[2.8, 3.4, 64]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.15}
          transparent
          opacity={0.4}
          side={2}
        />
      </mesh>
    </group>
  );
}
