import './homePage.css';

import { useLoader } from '@react-three/fiber';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three/addons/loaders/FBXLoader';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import * as THREE from 'three';
import jimModel from '../../../images/3dModels/Jim/Jim.fbx';
import jimTexture from '../../../images/3dModels/Jim/JimTexture.png';

function ModelViewer() {
  // Load your FBX model using the FBXLoader
  const fbx = useLoader(FBXLoader, jimModel);
  const texture = useLoader(TextureLoader, jimTexture);

  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({ map: texture });
    }
  });

  return (
    <Canvas className="ModelViewer">
      {/* Camera */}
      <perspectiveCamera
        makeDefault
        position={[0, 0, 0]}
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.5} position={[2, 1, 2]} />

      {/* Display the loaded 3D model */}
      <mesh>
        <primitive object={fbx} scale={[0.03, 0.03, 0.03]} position={[0, -3, 0]} />
        <meshStandardMaterial map={texture} attach="material" />
      </mesh>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  );
}

export default ModelViewer;
