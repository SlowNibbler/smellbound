// import './homePage.css';

// import { useLoader } from '@react-three/fiber';
// import React, { useEffect, useRef, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useAnimations } from '@react-three/drei'
// import { FBXLoader } from 'three/addons/loaders/FBXLoader';
// import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import * as THREE from 'three';

// import jimModel from '../../../images/3dModels/Jim/Jim.fbx';
// import jimTexture from '../../../images/3dModels/Jim/JimTexture.png';


// import './homePage.css';




// var modelProps = {
//   scale: [0.03, 0.03, 0.03],
//   position: [0, -3, 0]
// }


// function ModelViewer() {

//   const canvasRef = React.useRef(null);
//   const modelHolderRef = React.useRef(null);

//   const mixerRef = React.useRef(null);  // Reference to the mixer
//   const sceneRef = React.useRef(new THREE.Scene()); // Create a scene

//   const clockRef = React.useRef(new THREE.Clock());


  
//   // const handleSounds = (event) => {
//   //   if (event.type === 'disableSounds') {
//   //     // Disable sounds logic here
//   //     console.log('pngo disabled');
//   //   } else if (event.type === 'enableSounds') {
//   //     React.startTransition(() => {
//   //       setCurrentModel(pongoModel);
//   //       setCurrentTexture(pongoTexture);
//   //       setCurrentModelProps({
//   //         scale: [0.01, 0.01, 0.01],
//   //         position: [0, -3, 0]
//   //       });
//   //     });
//   //   }
//   // };




//   // const [fbx, setFbx] = React.useState(null);
//   // const [texture] = React.useState(new THREE.TextureLoader().load(pongoTexture));



//   // 'Armature|mixamo.com|Layer0' is the name of the animation we need to run.
//   // console.log(actions);

//   // window.addEventListener('disableSounds', handleSounds);
//   // window.addEventListener('enableSounds', handleSounds);

//   return (
//     <div>
//       <div className="ModelViewerTitle">3D Model Viewer</div>
//       <div className='ModelHolder' ref={modelHolderRef}>
//         <div className="CanvasWrapper">
//           <ModelCanvas/>
//         </div>
//       </div>
//     </div>
//   );
// }

// const AnimatedModel = () => {
//   const modelRef = useRef();
//   const [modelLoaded, setModelLoaded] = useState(false);

//   useEffect(() => {
//     const fbxLoader = new FBXLoader();
//     const animationActions = [];
  
//     const loadModel = (modelPath, animationName) => {
//       fbxLoader.load(modelPath, (object) => {
//         object.scale.set(0.01, 0.01, 0.01);
//         let mixer = new THREE.AnimationMixer(object);
  
//         const animationAction = mixer.clipAction(object.animations[0]);
//         animationActions.push(animationAction);
//       });
//     };
  
//     loadModel('models/vanguard_t_choonyung.fbx', 'default');
//     loadModel('models/PongoTestRiggedDance.fbx', 'samba');
  
//     setModelLoaded(true);
//   }, []);
  

  
//   return modelLoaded ? (
//     <primitive object={modelRef.current} scale={[0.03, 0.03, 0.03]} position={[1, 1, 1]} />
//   ) : null;
// };

// const ModelCanvas = () => {
//   return (
//     <Canvas className="ModelViewer" >
//       {/* Camera */}
//       <perspectiveCamera makeDefault position={[0, 0, 5]} />

//       {/* Lighting */}
//       <ambientLight intensity={0.5} />
//       <directionalLight intensity={1.5} position={[2, 1, 2]} />

//       {/* Display the loaded 3D model */}
//       <AnimatedModel />

//       <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
//     </Canvas>
//   );
// };


// // function ModelList() {

// //   const [currentModel, setCurrentModel] = React.useState(pongoModel);
// //   const [currentTexture, setCurrentTexture] = React.useState(pongoTexture);
// //   const [currentModleProps, setCurrentModelProps] = React.useState(modelProps);

// //   return(
// //     <div className='ModelList'>
// //       <li className='ModelListItem' onClick={() => {
// //         React.startTransition(() => {
// //           setCurrentModel(jimModel);
// //           setCurrentTexture(jimTexture);
// //           setCurrentModelProps({
// //             scale: [0.03, 0.03, 0.03],
// //             position: [0, -3, 0]
// //           });
// //         });
// //       }}>Jim</li>
// //       <li className='ModelListItem' onClick={() => {
// //         React.startTransition(() => {
// //           setCurrentModel(pongoModel);
// //           setCurrentTexture(pongoTexture);
// //           setCurrentModelProps({
// //             scale: [0.01, 0.01, 0.01],
// //             position: [0, -3, 0]
// //           });
// //         });
// //       }}>Pongo</li>
// //     </div>
// //   )
// // }


// export default ModelViewer;
