import React, { Suspense} from "react";
import "./App.scss";
import Header from "./components/header";
import {Section} from "./components/section";

import { Html } from "@react-three/drei";

import { Canvas} from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return <primitive object={gltf.scene}/>;
};

const HtmlContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh position={[0,-10,0]} scale={25}>
          <Model/>
        </mesh>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Feel the power</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight position={[1000, 0, 0]} intensity={1} />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights/>
        <Suspense fallback={null}>
          <HtmlContent />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
