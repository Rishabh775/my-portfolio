/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";

function FloatingShape({ position, color, speed, distort, size }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={mesh} position={position} scale={size}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          distort={distort}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function TorusShape({ position, color, speed, size }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    mesh.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={mesh} position={position} scale={size}>
        <torusGeometry args={[1, 0.4, 16, 32]} />
        <MeshWobbleMaterial
          color={color}
          factor={0.4}
          speed={1}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function Octahedron({ position, color, size }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={1.8} rotationIntensity={1} floatIntensity={2.5}>
      <mesh ref={mesh} position={position} scale={size}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const mesh = useRef();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
  });
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#f97316" sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#f97316" />
        <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#ec4899" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#f97316" />
        <FloatingShape
          position={[-3.5, 1.5, -1]}
          color="#f97316"
          speed={0.6}
          distort={0.4}
          size={0.8}
        />
        <FloatingShape
          position={[4, -1, -2]}
          color="#ec4899"
          speed={0.4}
          distort={0.3}
          size={0.6}
        />
        <TorusShape
          position={[3, 2, -1.5]}
          color="#8b5cf6"
          speed={0.5}
          size={0.7}
        />
        <TorusShape
          position={[-2, -2, -2]}
          color="#f97316"
          speed={0.3}
          size={0.5}
        />
        <Octahedron position={[0, -2.5, -1]} color="#ec4899" size={0.9} />
        <Octahedron position={[-4, 0, -2]} color="#f97316" size={0.6} />
        <Particles />
      </Canvas>
    </div>
  );
}