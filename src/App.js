import React, { Suspense, useRef} from "react";
import "./App.scss";
import Header from "./components/header";
import {Section} from "./components/section";

import { Html, OrbitControls } from "@react-three/drei";

import { Canvas, useFrame} from "@react-three/fiber";
import { useLoader} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const PorscheModel = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  return <primitive object={gltf.scene}/>;
};


const HtmlContent = () => {

  const ref = useRef()

  useFrame(() => (ref.current.rotation.y += 0.003))

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh ref={ref} position={[0, -10, 0]} scale={25}>
          <PorscheModel />
        </mesh>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Feel the power</h1>
          </div>
        </Html>
        {/* <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
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
      <Canvas camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HtmlContent />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
