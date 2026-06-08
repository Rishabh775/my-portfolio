/* eslint-disable react/no-unknown-property, react/prop-types */
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line, RoundedBox } from "@react-three/drei";

const CODE_LINES = [
  { width: 1.4, color: "#f97316", y: 0.45 },
  { width: 1.0, color: "#a1a1aa", y: 0.2 },
  { width: 1.2, color: "#71717a", y: -0.05 },
  { width: 0.7, color: "#8b5cf6", y: -0.3 },
  { width: 0.9, color: "#a1a1aa", y: -0.55 },
];

function TerminalWindow() {
  const cursorRef = useRef();

  useFrame((state) => {
    cursorRef.current.visible = Math.floor(state.clock.elapsedTime * 2) % 2 === 0;
  });

  return (
    <group position={[0, 0.3, 0]}>
      <RoundedBox args={[2.6, 1.7, 0.06]} radius={0.04} smoothness={4}>
        <meshStandardMaterial
          color="#0a0a0f"
          emissive="#f97316"
          emissiveIntensity={0.04}
          metalness={0.6}
          roughness={0.4}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.04]}>
        <planeGeometry args={[2.35, 1.45]} />
        <meshStandardMaterial color="#050508" metalness={0.2} roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.72, 0.05]}>
        <planeGeometry args={[2.35, 0.18]} />
        <meshStandardMaterial color="#111118" metalness={0.3} roughness={0.6} />
      </mesh>

      {["#ef4444", "#eab308", "#22c55e"].map((color, i) => (
        <mesh key={color} position={[-1.05 + i * 0.18, 0.72, 0.06]}>
          <circleGeometry args={[0.04, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        </mesh>
      ))}

      {CODE_LINES.map((line) => (
        <mesh key={line.y} position={[-0.95 + line.width / 2, line.y, 0.06]}>
          <boxGeometry args={[line.width, 0.06, 0.01]} />
          <meshStandardMaterial
            color={line.color}
            emissive={line.color}
            emissiveIntensity={0.15}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}

      <mesh ref={cursorRef} position={[0.15, -0.55, 0.07]}>
        <boxGeometry args={[0.06, 0.14, 0.01]} />
        <meshStandardMaterial color="#f97316" emissive="#f97316" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function CpuChip() {
  const chipRef = useRef();

  useFrame((state) => {
    chipRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  const pins = useMemo(() => {
    const positions = [];
    for (let i = -4; i <= 4; i++) {
      positions.push([i * 0.12, -0.06, -0.55]);
      positions.push([i * 0.12, -0.06, 0.55]);
      positions.push([-0.55, -0.06, i * 0.12]);
      positions.push([0.55, -0.06, i * 0.12]);
    }
    return positions;
  }, []);

  return (
    <group ref={chipRef} position={[0, -1.1, 0.2]} rotation={[0.3, 0.4, 0]}>
      <mesh>
        <boxGeometry args={[1.1, 0.1, 1.1]} />
        <meshStandardMaterial color="#14141f" metalness={0.8} roughness={0.25} />
      </mesh>

      <mesh position={[0, 0.06, 0]}>
        <boxGeometry args={[0.9, 0.02, 0.9]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#f97316"
          emissiveIntensity={0.08}
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {pins.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.05, 0.08, 0.05]} />
          <meshStandardMaterial color="#2a2a3a" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}

      {Array.from({ length: 81 }, (_, idx) => {
        const i = Math.floor(idx / 9);
        const j = idx % 9;
        return (
          <mesh
            key={`${i}-${j}`}
            position={[(i - 4) * 0.1, 0.07, (j - 4) * 0.1]}
          >
            <boxGeometry args={[0.02, 0.01, 0.02]} />
            <meshStandardMaterial
              color={i === j ? "#f97316" : "#3f3f50"}
              emissive={i === j ? "#f97316" : "#000000"}
              emissiveIntensity={i === j ? 0.4 : 0}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function Bracket({ side = "left" }) {
  const x = side === "left" ? -1.85 : 1.85;
  const rot = side === "left" ? 0.35 : -0.35;

  return (
    <group position={[x, 0.1, 0.3]} rotation={[0, rot, 0]}>
      <mesh position={[0, 0.35, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.06, 0.75, 0.06]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.25}
          wireframe
        />
      </mesh>
      <mesh position={[0, -0.35, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.06, 0.75, 0.06]} />
        <meshStandardMaterial
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.25}
          wireframe
        />
      </mesh>
    </group>
  );
}

function DataGraph() {
  const groupRef = useRef();
  const nodes = useMemo(
    () => [
      [1.8, 0.8, -0.5],
      [2.3, -0.2, 0.2],
      [1.6, -0.9, -0.3],
      [2.5, 0.3, 0.6],
    ],
    []
  );

  const edges = useMemo(
    () => [
      [nodes[0], nodes[1]],
      [nodes[1], nodes[2]],
      [nodes[1], nodes[3]],
      [nodes[0], nodes[3]],
    ],
    [nodes]
  );

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0.3, 0, 0]}>
      {edges.map((edge, i) => (
        <Line
          key={i}
          points={edge}
          color="#8b5cf6"
          lineWidth={1}
          transparent
          opacity={0.35}
        />
      ))}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.12, 0.12, 0.12]} />
          <meshStandardMaterial
            color={i === 0 ? "#f97316" : "#8b5cf6"}
            emissive={i === 0 ? "#f97316" : "#8b5cf6"}
            emissiveIntensity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

function BinaryBits() {
  const bitsRef = useRef();
  const bits = useMemo(
    () =>
      ["1", "0", "1", "0", "1"].map((_, i) => ({
        x: -2.2 + i * 0.35,
        y: 1.2 + (i % 2) * 0.15,
        z: -0.4 + i * 0.1,
        value: i % 2 === 0 ? 1 : 0,
      })),
    []
  );

  useFrame((state) => {
    bitsRef.current.children.forEach((child, i) => {
      child.position.y = bits[i].y + Math.sin(state.clock.elapsedTime * 0.8 + i) * 0.06;
    });
  });

  return (
    <group ref={bitsRef}>
      {bits.map((bit, i) => (
        <mesh key={i} position={[bit.x, bit.y, bit.z]}>
          <boxGeometry args={[0.14, 0.14, 0.04]} />
          <meshStandardMaterial
            color={bit.value ? "#22c55e" : "#3f3f50"}
            emissive={bit.value ? "#22c55e" : "#000000"}
            emissiveIntensity={bit.value ? 0.25 : 0}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function CentralCore() {
  const groupRef = useRef();

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.06;
  });

  return (
    <group ref={groupRef} position={[3.6, 0, -1.2]} scale={0.72}>
      <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.15}>
        <TerminalWindow />
      </Float>
      <CpuChip />
      <Bracket side="left" />
      <Bracket side="right" />
      <DataGraph />
      <BinaryBits />
    </group>
  );
}
