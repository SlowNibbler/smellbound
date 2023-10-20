import { Canvas, useFrame } from "@react-three/fiber"
import PongoModel from "./PongoModel.js"
import JimModel from "./JimModel.js"

import { OrbitControls } from "@react-three/drei"
import React, { useEffect } from "react"

import pongoModel from './../../../../images/3dModels/PongoDance/PongoTestRiggedDance.glb';
import pongoTexture from './../../../../images/3dModels/PongoDance/testTexute1.png';

import jimModel from './../../../../images/3dModels/Jim/JimOpt.glb';
import jimTexture from './../../../../images/3dModels/Jim/JimTexture.png';

import trungusModel from './../../../../images/3dModels/Trungus/trungus.glb';
import ModelGen from "./Model.js"


export default function ModelViewerNew() {
  const [currentModel, setCurrentModel] = React.useState(jimModel);
  const [currentTexture, setCurrentTexture] = React.useState(jimTexture);

  console.log('ahahahasasa');
  return (
    <div className="ModelHolder">
      <div className="CanvasWrapper">
        <Canvas className="ModelViewer" shadows camera={{ position: [1, 2.5, 2.5], fov: 50 }}>
          <OrbitControls/>
          <ambientLight />
          <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
          <group position={[0, -1, 0]} scale={[.5, .5, .5]}>
            <Model currentModel={currentModel} currentTexture={currentTexture}/>
          </group>
        </Canvas>
      </div>
      <ModelList setCurrentModel={setCurrentModel} setCurrentTexture={setCurrentTexture} />
    </div>
  )
}

function Model({ currentModel, currentTexture }) {
  if (currentModel === pongoModel) {
    console.log('pongo');

    return <PongoModel model={currentModel} texture={currentTexture}/>

  } else if (currentModel === jimModel) {
    console.log('jim');
    return <JimModel model={currentModel} texture={currentTexture}/>
  } else if (currentModel === trungusModel) {
    return <ModelGen model={currentModel} texture={currentTexture}/>

  }
}




function ModelList({ setCurrentModel, setCurrentTexture }) {
  return(
    <div className='ModelList'>
      <li className='ModelListItem' onClick={() => {
          setCurrentModel(jimModel);
          setCurrentTexture(jimTexture);
      }}>Jim</li>
      <li className='ModelListItem' onClick={() => {
          setCurrentModel(pongoModel);
          setCurrentTexture(pongoTexture);
      }}>Pongo</li>
      <li className='ModelListItem' onClick={() => {
          setCurrentModel(trungusModel);
          setCurrentTexture(pongoTexture);
      }}>Trungo</li>
    </div>
  )
}
