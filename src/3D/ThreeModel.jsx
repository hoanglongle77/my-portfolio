"use client";

import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, Environment } from "@react-three/drei";

// Danh sách level
const LEVELS = [
  {
    id: 1,
    label: "Console Tập Sự",
    path: "/models/level1.glb",
    description: "Beginner coder typing console.log in a dark room.",
  },
  {
    id: 2,
    label: "Debug Thủ",
    path: "/models/level2.glb",
    description: "Intermediate dev starting to use holograms.",
  },
  {
    id: 3,
    label: "JSX Kiếm Tu",
    path: "/models/level3.glb",
    description: "Swordsman of code wielding JSX blade.",
  },
  {
    id: 4,
    label: "Fullstack Chân Nhân",
    path: "/models/level4.glb",
    description: "Floating coder with fullstack mastery.",
  },
  {
    id: 5,
    label: "DevOps Tôn Giả",
    path: "/models/level5.glb",
    description: "Code commander managing CI/CD dragons.",
  },
  {
    id: 6,
    label: "Production Chưởng Môn",
    path: "/models/level6.glb",
    description: "Celestial production master connected to the world.",
  },
];

const Model = ({ path }) => {
  const gltf = useGLTF(path);
  return (
    <primitive
      object={gltf.scene}
      scale={1.5}
      position={[0, -1.2, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
};

const ThreeModel = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const level = LEVELS[levelIndex];

  return (
    <div className="relative w-full max-w-2xl h-[600px] mx-auto border-2 border-[var(--color-primary)] rounded-2xl overflow-hidden bg-[var(--color-background)]">
      <Canvas
        className="absolute inset-0 z-0"
        camera={{ position: [0, 1.5, 5], fov: 45 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 2, 1]} intensity={1.2} />
        <color attach="background" args={["#121212"]} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Stage
            adjustCamera={false}
            intensity={1}
            environment="city"
            shadows="contact"
          >
            <Model path={level.path} />
          </Stage>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.25}
          enablePan={false}
        />
      </Canvas>

      {/* Overlay HUD */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-xl bg-[var(--color-muted)]/80 border border-[var(--color-border)] backdrop-blur-md rounded-xl p-4 shadow-xl">
        <h2 className="text-xl font-semibold text-[var(--color-primary)] text-center">
          {level.label}
        </h2>
        <p className="text-sm text-[var(--color-secondary)] text-center mt-1">
          {level.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {LEVELS.map((_, i) => (
            <button
              key={i}
              onClick={() => setLevelIndex(i)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition border ${
                i === levelIndex
                  ? "bg-[var(--color-primary)] text-black"
                  : "bg-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-border)]/80"
              }`}
            >
              Lv {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeModel;
