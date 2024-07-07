import React, { useEffect, useState, Component } from "react"
import './artPage.css'
import ModelViewer from "../homePage/models/ModelViewer";
import Model from "../homePage/models/Model";
import { Provider, useSelector } from 'react-redux'


import { Canvas, useThree  } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const SculptingContent = ({ activeMedium }) => {
    // const [activeContent, setActiveContent] = useState(Object.values(activeMedium.content)[0]);
    const images = Object.values(activeMedium.images); // Set your default model here


    const nightmareEnabled = useSelector((state)=>state.quest.nightmareEnabled)

    // console.log(activeContent)

    return (
      <div className="ArtContent">
        {/* <ul className="SubList">
          {Object.values(activeMedium.content).map((content, index) => (
            <li id={content.name === activeContent.name ? 'selected' : ''} className="SubListItem" key={index}>
              <div onClick={() => setActiveContent(content)} key={index}>
                {content.name}
              </div>
            </li>
          ))}
        </ul> */}
        <div className="ImageGallery">
          {images.map((image, index) => (
            <CanvasWrapper nightmareEnabled={nightmareEnabled} key={index} activeModel={image} index={index}/>
          ))}
        </div>
      </div>
    );
  };


  const CanvasWrapper = ({ activeModel, index, nightmareEnabled }) => {

    if (nightmareEnabled && activeModel.nightmare != null) {
      return (
        <div className="ScultpoWrap" key={index}>
          <div className="image-info">
            {activeModel.name}<br/>
            {activeModel.text}
          </div>
          <Canvas className="ModelViewer" shadows camera={{ position: [2, 0, 4.5], fov: 50 }}>
            <OrbitControls/>
            <ambientLight />
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
            <group position={[0, 0, 0]} scale={[.5, .5, .5]}>
              <Model activeModel={activeModel.nightmare}/>
            </group>
          </Canvas>
        </div>
      );
    } else {
      return (
        <div className="ScultpoWrap" key={index}>
          <div className="image-info">
            {activeModel.name}<br/>
            {activeModel.text}
          </div>
          <Canvas className="ModelViewer" shadows camera={{ position: [2, 0, 4.5], fov: 50 }}>
            <OrbitControls/>
            <ambientLight />
            <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
            <group position={[0, 0, 0]} scale={[.5, .5, .5]}>
              <Model activeModel={activeModel.model}/>
            </group>
          </Canvas>
        </div>
      );
    }

    
  }
  
  export default SculptingContent