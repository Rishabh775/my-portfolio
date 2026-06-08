/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export default function ContactPortal() {
  const portalRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    portalRef.current.rotation.z = t * 0.15;
    innerRef.current.rotation.y = -t * 0.4;
    innerRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <group>
      <Float speed={1.8} floatIntensity={1}>
        <mesh ref={portalRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.08, 32, 100]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.6}
            metalness={1}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <mesh ref={innerRef} scale={1.2}>
        <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
        <MeshDistortMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={3}
        />
      </mesh>

      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 2.8, Math.sin(angle) * 2.8, 0]}
          >
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ec4899"
              emissiveIntensity={1}
            />
          </mesh>
        );
      })}

      <pointLight position={[0, 0, 2]} intensity={2} color="#ec4899" distance={8} />
    </group>
  );
}
