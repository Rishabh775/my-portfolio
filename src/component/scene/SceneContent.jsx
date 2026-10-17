/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, useScroll } from "@react-three/drei";
import {
  ParticleField,
  FloorGrid,
  BackgroundStars,
  SceneLights,
} from "./AmbientScene";
import CentralCore from "./CentralCore";
import SkillOrbit from "./SkillOrbit";
import ProjectNodes from "./ProjectNodes";
import ExperienceNodes from "./ExperienceNodes";
import ContactPortal from "./ContactPortal";
import { scrollOffsetsRef } from "../scrollOffsetsRef";

export default function SceneContent() {
  const scroll = useScroll();
  const groupRefs = useRef([]);

  const sections = [
    <CentralCore key="core" />,
    <SkillOrbit key="skills" />,
    <ProjectNodes key="projects" />,
    <ExperienceNodes key="experience" />,
    <ContactPortal key="contact" />,
  ];

  useFrame((state) => {
    const total = scroll?.pages ?? 6;
    const span = state.viewport.height * (total - 1);
    const offsets = scrollOffsetsRef.current;
    groupRefs.current.forEach((group, i) => {
      if (group) group.position.y = -span * (offsets[i] ?? 0);
    });
  });

  return (
    <>
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#050508", 8, 28]} />
      <SceneLights />
      <Environment preset="night" />
      <BackgroundStars />
      <ParticleField count={350} />
      <FloorGrid />

      {sections.map((content, i) => (
        <group
          key={i}
          ref={(el) => {
            groupRefs.current[i] = el;
          }}
        >
          {content}
        </group>
      ))}
    </>
  );
}
