import React, { useEffect, useState, Component } from "react"
import './artPage.css'
import { Provider, useSelector } from 'react-redux'
import PictureShow from './PictureShow.js';
import { Canvas, useThree  } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Model from "../homePage/models/Model";

const DrawingContent = ({ activeMedium }) => {
  const images = Object.values(activeMedium.images); // Set your default model here

  // // Initialize activeMedium from session storage or default value
  // const storedContent = sessionStorage.getItem('activeContent');
  // const initialActiveContent = storedContent ? JSON.parse(storedContent) : defaultContent;
  // //console.log(initialActiveContent);


  
  // const [activeContent, setActiveContent] = useState(initialActiveContent);

  // // Use an effect to save the activeMedium to session storage whenever it changes
  // useEffect(() => {
  //   sessionStorage.setItem('activeContent', JSON.stringify(activeContent));
  // }, [activeContent]);
    



  const nightmareEnabled = useSelector((state)=>state.quest.nightmareEnabled)


  //   // Use useEffect to perform actions when activeMedium changes
  useEffect(() => {


    // if (activeContent === JSON.parse(sessionStorage.getItem('activeContent'))) {
    //   setActiveContent(sessionStorage.getItem('activeContent'))
    //   console.log('match')
    // } else {
    //   setActiveContent(Object.values(activeMedium.content)[0])
    //   sessionStorage.setItem('activeContent', JSON.stringify(activeContent));
    //   console.log("Component was reloaded/reset. New activeMedium:", activeMedium);
    // }
    // console.log('adadadda');
    // console.log(activeContent);
    // console.log(storedContent);

  }, [activeMedium]);

  // Use an effect to save the activeMedium to session storage whenever it changes

    

  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageViewer = (index) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
    //console.log('hsass');
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  const nextImage = () => {
    // Implement logic to go to the next image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    // Implement logic to go to the previous image
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

    return (
      <div className="ArtContent">
        {/* <ul className="SubList">
          {Object.values(activeMedium.content).map((content, index) => (
            <li id={content.name === activeContent.name ? 'selected' : ''} className="SubListItem" key={index}>
              <div onClick={() => setActiveContent(content)}>
                {content.name}
              </div>
            </li>
          ))}
        </ul> */}
        <div className="ImageGallery">
          {images.map((image, index) => (
            <div key={index} className="image-container" onClick={() => openImageViewer(index)}>
              {/* <div className="image-info">
                <div>
                  {image.name}<br/>
                  {image.text}
                </div>
              </div> */}
              <Image image={image} index={index} nightmareEnabled={nightmareEnabled} />
            </div>
          ))}
        </div>
        
        {viewerOpen && (
          <PictureShow
            images={images}
            currentIndex={currentImageIndex}
            closeViewer={closeViewer}
            nextImage={nextImage}
            prevImage={prevImage}
          />
        )}
      </div>
    );
  };

  const Image = ({image, index, nightmareEnabled}) => {
    const hasScale = 'scale' in image;
    if (hasScale) {
      return CanvasWrapper(image, index, nightmareEnabled)
    }
    else if (nightmareEnabled && image.nightmare != null) {
      return (
        <a key={index} className="image-link" rel="noopener noreferrer">
          <img src={image.nightmare}_ key={index} className="Imagee" alt={`Image ${index}`} />
        </a>
      );
    } else {
      return (
        <a key={index} className="image-link" rel="noopener noreferrer">
          <img src={image.image} key={index} className="Imagee" alt={`Image ${index}`} />
        </a>
      );
    }
  } 
  

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

  export default DrawingContent