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
  const [currentModel, setCurrentModel] = React.useState(pongoModel);
  const [currentTexture, setCurrentTexture] = React.useState(pongoTexture);
  const [currentModleProps, setCurrentModelProps] = React.useState(modelProps);
  
  const canvasRef = React.useRef(null);
  const modelHolderRef = React.useRef(null);

  const mixerRef = React.useRef(null);  // Reference to the mixer
  const sceneRef = React.useRef(new THREE.Scene()); // Create a scene

  const clockRef = React.useRef(new THREE.Clock());

  // resize window
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const modelHolder = modelHolderRef.current;
    const resizeCanvas = () => {
      const newWidth = modelHolder.clientWidth;
      // Set the height to match the width to maintain a square aspect ratio
      const newHeight = newWidth;
      // Update the height of the canvas based on the newWidth
      canvas.height = newHeight;
      canvas.width = newWidth;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

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

  // const [fbx, setFbx] = React.useState(null);
  // const [texture] = React.useState(new THREE.TextureLoader().load(pongoTexture));

  React.useEffect(() => {
    const loader = new FBXLoader();
    loader.load(currentModel, (fbx) => {
      const mixer = new THREE.AnimationMixer(fbx);
      fbx.animations.forEach((clip, index) => {
        console.log(`Animation ${index}: ${clip.name}`);
      })

      const action = mixer.clipAction(fbx.animations[1]);
      action.setEffectiveTimeScale(1);
      action.setEffectiveWeight(1);
      action.play();

      // Store the mixer in the ref
      mixerRef.current = mixer;

      // Assuming you have a mesh in the FBX, apply the texture
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ map: texture });
        }
      });

      // Assuming you have a valid camera and controls
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 5);

      // Assuming you have a valid renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Assuming you have a mesh to add to the scene
      // Adjust this based on your application structure
      sceneRef.current.add(fbx);
      action.timeScale = 1.0; // Adjust as needed

      const animate = () => {
        const deltaTime = clockRef.current.getDelta();

        requestAnimationFrame(animate);
        // Update the mixer and other animations using deltaTime
        if (mixerRef.current) {
          mixerRef.current.update(deltaTime);
        }
        if (mixerRef.current) mixerRef.current.update(0.1);
        renderer.render(sceneRef.current, camera);
      };

      console.log('animate')
      animate();


    });
  }, [currentModel, texture]);  // Ensure useEffect runs when model or texture changes



  console.log('FBX Object:', fbx);
  console.log('Texture Object:', texture);


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
      <div className='ModelHolder' ref={modelHolderRef}>
        <div className="CanvasWrapper">
          <Canvas className="ModelViewer" ref={canvasRef} style={{ position: 'absolute', width: '100%', height: '100%' }}>
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
      </div>
    </div>
  );
}



export default ModelViewer;
