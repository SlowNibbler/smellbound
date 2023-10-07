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

import pongoModel from '../../../images/3dModels/PongoDance/PongoTestRiggedDance.fbx';
import pongoTexture from '../../../images/3dModels/PongoDance/testTexute1.png';
import './homePage.css';

var modelProps = {
  scale: [0.03, 0.03, 0.03],
  position: [0, -3, 0]
}


function ModelViewer() {
  const [currentModel, setCurrentModel] = React.useState(jimModel);
  const [currentTexture, setCurrentTexture] = React.useState(jimTexture);
  const [currentModleProps, setCurrentModelProps] = React.useState(modelProps);

  const handleSounds = (event) => {
    if (event.type === 'disableSounds') {
      // Disable sounds logic here
      console.log('pngo disabled');
    } else if (event.type === 'enableSounds') {
      React.startTransition(() => {
        setCurrentModel(pongoModel);
        setCurrentTexture(pongoTexture);
        setCurrentModelProps({
          scale: [0.01, 0.01, 0.01],
          position: [0, -3, 0]
        });
      });
    }
  };

  const fbx = useLoader(FBXLoader, currentModel);
  const texture = useLoader(TextureLoader, currentTexture);

  fbx.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({ map: texture });
    }
  });

  window.addEventListener('disableSounds', handleSounds);
  window.addEventListener('enableSounds', handleSounds);

  return (
    <div>
      <div className="ModelViewerTitle">3D Model Viewer</div>
      <div className='ModelList'>
        <li className='ModelListItem' onClick={() => {
          React.startTransition(() => {
            setCurrentModel(jimModel);
            setCurrentTexture(jimTexture);
            setCurrentModelProps({
              scale: [0.03, 0.03, 0.03],
              position: [0, -3, 0]
            });
          });
        }}>Jim</li>
        <li className='ModelListItem' onClick={() => {
          React.startTransition(() => {
            setCurrentModel(pongoModel);
            setCurrentTexture(pongoTexture);
            setCurrentModelProps({
              scale: [0.01, 0.01, 0.01],
              position: [0, -3, 0]
            });
          });
        }}>Pongo</li>
      </div>
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
          <primitive object={fbx} scale={currentModleProps.scale} position={currentModleProps.position} />
          <meshStandardMaterial map={texture} attach="material" />
        </mesh>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </div>
    
  );
}



export default ModelViewer;
