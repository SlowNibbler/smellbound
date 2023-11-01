import { Canvas } from "@react-three/fiber"
import Model from "./Model.js"

import { OrbitControls } from "@react-three/drei"
import React, { useEffect, useState } from "react"

import PongoModel from './../../../../images/3dModels/Pongo.glb';
import JimModel from './../../../../images/3dModels/Jim.glb';
import TrungusModel from './../../../../images/3dModels/Trungus1.glb';
import RatModel from './../../../../images/3dModels/El_Jefe1.glb';
import DentistModel from './../../../../images/3dModels/Dentist.glb';
import FloopModel from './../../../../images/3dModels/Floop.glb';
import ScrimbloModel from './../../../../images/3dModels/Scrimblo.glb';
import TumboModel from './../../../../images/3dModels/Tumbo.glb';

import ModelList from './ModelList.js'

import { useSelector } from 'react-redux'
let boogieSwitch = false


export default function ModelViewer() {

  const nightmareEnabled = useSelector((state)=>state.quest.nightmareEnabled)

  const models = [
    {
      name: 'Jim',
      model: JimModel,
      scale: [7, 7, 7],
      rotation: [0, .1, 0],
      position: [0, -1, 0]
    },
    {
      name: 'Pongo',
      model: PongoModel,
      position: [0, 0, 0]
    },
    {
      name: 'Tumbo',
      model: TumboModel,
      scale: [20, 20, 20],
      position: [0, 2, 0]
    },
    {
      name: 'El Jefe',
      model: RatModel,
      scale: [40, 40, 40],
      position: [0, 0, 0]
    },
    {
      name: 'Trungus',
      model: TrungusModel,
      scale: [50, 50, 50],
      position: [0, 0, 0]
    },
  ];

  

  const [activeModel, setActiveModel] = useState(models[0]); // Set your default model here


 // Use useEffect to switch to 'Pongo' when nightmareEnabled is true
 useEffect(() => {
  if (nightmareEnabled && !boogieSwitch) {
    const pongoModel = models.find((model) => model.name === 'Pongo');
    if (pongoModel && activeModel.name) {
      console.log('pongo')
      setActiveModel(pongoModel);
    }
    boogieSwitch = true;
  } else if (!nightmareEnabled && boogieSwitch) {
    boogieSwitch = false;
  }
}, [nightmareEnabled, models]);


  return (
    <div className="ModelHolder">
      <div className="CanvasWrapper">
        <Canvas className="ModelViewer" shadows camera={{ position: [1, 2, 4.5], fov: 50 }}>
          <OrbitControls/>
          <ambientLight />
          <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
          <group position={[0, -1.25, 0]} scale={[.5, .5, .5]}>
            <Model activeModel={activeModel}/>
          </group>
        </Canvas>
      </div>
      <ModelList models={models} setActiveModel={setActiveModel} />
    </div>
  )
}
