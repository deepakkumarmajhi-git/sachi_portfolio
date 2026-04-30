"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function AbstractStructure() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x -= delta * 0.04;
      groupRef.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <group ref={groupRef}>
        {/* Large outer wireframe */}
        <mesh>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.04} />
        </mesh>

        {/* Middle octahedron — gold wireframe */}
        <mesh>
          <octahedronGeometry args={[1.5, 0]} />
          <meshBasicMaterial color="#d4af37" wireframe transparent opacity={0.18} />
        </mesh>

        {/* Inner solid glowing core */}
        <mesh>
          <icosahedronGeometry args={[0.45, 0]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </mesh>
      </group>
    </Float>
  );
}

export function ArchitecturalModel() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 opacity-75 mix-blend-screen pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <fog attach="fog" args={["#030303", 5, 16]} />
        <ambientLight intensity={0.6} />
        <AbstractStructure />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
