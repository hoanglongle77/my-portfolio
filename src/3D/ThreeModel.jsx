"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, Environment } from "@react-three/drei";
import { Suspense } from "react";

const Model = () => {
  const gltf = useGLTF("/models/myModel.glb");

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
  return (
    <Canvas
      className="absolute inset-0 z-0 md:max-w-xl py-8 md:py-0 hidden lg:block border-2 border-[var(--color-primary)] rounded-2xl"
      camera={{ position: [0, 1.5, 5], fov: 45 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 2, 1]} intensity={1.2} />

      {/* Optional: Background Gradient */}
      <color attach="background" args={["#0d0d0d"]} />

      {/* Optional: Environmental Lighting */}
      <Environment preset="city" />

      <Suspense fallback={null}>
        {/* Stage adds soft shadows and light rig */}
        <Stage
          adjustCamera={false}
          intensity={1}
          environment="city"
          shadows="contact"
        >
          <Model />
        </Stage>
      </Suspense>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.25}
        enablePan={false}
      />
    </Canvas>
  );
};

export default ThreeModel;
