import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Cylinder, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Floating Code Elements
function FloatingCode({ position, text, color = "#00ff88" }: { position: [number, number, number], text: string, color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
}

// Desktop Computer
function Computer({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Monitor */}
      <Box position={[0, 1, 0]} args={[2, 1.2, 0.1]}>
        <meshStandardMaterial color="#1a1a1a" />
      </Box>
      {/* Screen */}
      <Box position={[0, 1, 0.06]} args={[1.8, 1, 0.01]}>
        <meshStandardMaterial color="#0066cc" emissive="#0066cc" emissiveIntensity={0.3} />
      </Box>
      {/* Stand */}
      <Cylinder position={[0, 0.2, 0]} args={[0.1, 0.1, 0.4]}>
        <meshStandardMaterial color="#333" />
      </Cylinder>
      {/* Base */}
      <Cylinder position={[0, 0, 0]} args={[0.4, 0.4, 0.1]}>
        <meshStandardMaterial color="#333" />
      </Cylinder>
    </group>
  );
}

// Coffee Mug
function CoffeeMug({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <Cylinder args={[0.15, 0.15, 0.3]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      {/* Coffee */}
      <Cylinder position={[0, 0.12, 0]} args={[0.14, 0.14, 0.05]}>
        <meshStandardMaterial color="#2F1B14" />
      </Cylinder>
      {/* Handle */}
      <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.1, 0.02]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
}

// Books Stack
function BooksStack({ position }: { position: [number, number, number] }) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'];
  
  return (
    <group position={position}>
      {colors.map((color, index) => (
        <Box key={index} position={[0, index * 0.15, 0]} args={[0.8, 0.12, 0.6]}>
          <meshStandardMaterial color={color} />
        </Box>
      ))}
    </group>
  );
}

// Plant
function Plant({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Pot */}
      <Cylinder args={[0.2, 0.15, 0.3]}>
        <meshStandardMaterial color="#8B4513" />
      </Cylinder>
      {/* Leaves */}
      <Float speed={3} rotationIntensity={0.1} floatIntensity={0.3}>
        <Sphere position={[0, 0.3, 0]} args={[0.25]}>
          <meshStandardMaterial color="#2d5a27" />
        </Sphere>
        <Sphere position={[0.1, 0.4, 0.1]} args={[0.15]}>
          <meshStandardMaterial color="#2d5a27" />
        </Sphere>
        <Sphere position={[-0.1, 0.35, -0.1]} args={[0.12]}>
          <meshStandardMaterial color="#2d5a27" />
        </Sphere>
      </Float>
    </group>
  );
}

// Main Scene
function WorkspaceScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Desk */}
      <Box position={[0, -0.5, 0]} args={[4, 0.1, 2]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Computer */}
      <Computer position={[0, -0.45, -0.3]} />
      
      {/* Coffee Mug */}
      <CoffeeMug position={[1.5, -0.35, 0.5]} />
      
      {/* Books Stack */}
      <BooksStack position={[-1.5, -0.45, 0.3]} />
      
      {/* Plant */}
      <Plant position={[1.2, -0.45, -0.7]} />
      
      {/* Floating Code Elements */}
      <FloatingCode position={[-2, 1, 1]} text="Java" color="#f89820" />
      <FloatingCode position={[2, 1.5, 0.5]} text="React" color="#61dafb" />
      <FloatingCode position={[-1.5, 2, -1]} text="Spring" color="#6db33f" />
      <FloatingCode position={[1.8, 0.8, -1.2]} text="Node.js" color="#339933" />
      <FloatingCode position={[0, 2.5, 1.5]} text="MongoDB" color="#47a248" />
    </group>
  );
}

export default function ThreeDWorkspace() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        
        <WorkspaceScene />
        
        <Environment preset="city" background={false} />
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}