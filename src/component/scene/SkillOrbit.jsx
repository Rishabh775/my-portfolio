/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { portfolioData } from "../../data/portfolioData";

const allSkills = portfolioData.skillCategories.flatMap((c) => c.skills);

export default function SkillOrbit() {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#0a0a0f"
            emissive="#f97316"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {allSkills.map((skill, i) => {
        const angle = (i / allSkills.length) * Math.PI * 2;
        const radius = 2.8 + (i % 3) * 0.4;
        const y = Math.sin(angle * 2) * 0.6;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={skill.name} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshStandardMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={0.35}
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[0, -0.35, 0]}>
              <ringGeometry args={[0.12, 0.16, 16]} />
              <meshStandardMaterial
                color={skill.color}
                emissive={skill.color}
                emissiveIntensity={0.6}
                transparent
                opacity={0.7}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
