import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OBJLoader } from 'three/addons/loaders/OBJLoader';
import * as THREE from 'three';

const WatchModel = ({ model }) => {
  const watchRef = useRef();

  const changeColorToRed = (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(0xff0000); // Червоний колір
      }
    });
  };

  if (model) {
    changeColorToRed(model);
  }

  return <primitive object={model} ref={watchRef} />;
};

const Watch3d = () => {
  const [model, setModel] = React.useState(null);
  const scene = new THREE.Scene();

  const handleModelLoad = (obj) => {
    scene.add(obj);
    setModel(obj);
  };

  const handleModelChange = (event) => {
    const newModel = event.target.files[0];
    const loader = new OBJLoader();

    loader.load(
      URL.createObjectURL(newModel),
      handleModelLoad,
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.error('An error occurred', error);
      }
    );
  };

  return (
    <>
      <input type="file" onChange={handleModelChange} accept=".obj" />
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        {model && <WatchModel model={model} />}
      </Canvas>
    </>
  );
};

export default Watch3d;

