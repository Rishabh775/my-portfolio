/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
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

export default function SceneContent() {
  const viewport = useThree((state) => state.viewport);

  const pages = [
    { y: 0, content: <CentralCore /> },
    { y: -viewport.height, content: <SkillOrbit /> },
    { y: -viewport.height * 2, content: <ProjectNodes /> },
    { y: -viewport.height * 3, content: <ExperienceNodes /> },
    { y: -viewport.height * 4, content: <ContactPortal /> },
  ];

  return (
    <>
      <color attach="background" args={["#050508"]} />
      <fog attach="fog" args={["#050508", 8, 28]} />
      <SceneLights />
      <Environment preset="night" />
      <BackgroundStars />
      <ParticleField count={600} />
      <FloorGrid />

      {pages.map((page, i) => (
        <group key={i} position={[0, page.y, 0]}>
          {page.content}
        </group>
      ))}
    </>
  );
}
