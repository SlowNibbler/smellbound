import React, { useEffect, useState, Component } from "react"
import './artPage.css'
import { Provider, useSelector } from 'react-redux'
import PictureShow from './PictureShow.js';


const DrawingContent = ({ activeMedium }) => {
    const [activeContent, setActiveContent] = useState(Object.values(activeMedium.content)[0]);
    console.log(activeContent)

    const nightmareEnabled = useSelector((state)=>state.quest.nightmareEnabled)


      // Use useEffect to perform actions when activeMedium changes
    useEffect(() => {
      setActiveContent(Object.values(activeMedium.content)[0])
      console.log("Component was reloaded/reset. New activeMedium:", activeMedium);

    }, [activeMedium]);
    const [viewerOpen, setViewerOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const openImageViewer = (index) => {
      setCurrentImageIndex(index);
      setViewerOpen(true);
      console.log('hsass');
    };

    const closeViewer = () => {
      setViewerOpen(false);
    };
  
    const nextImage = () => {
      // Implement logic to go to the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % activeContent.images.length);
    };
  
    const prevImage = () => {
      // Implement logic to go to the previous image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? activeContent.images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="ArtContent">
        <ul className="SubList">
          {Object.values(activeMedium.content).map((content, index) => (
            <li id={content.name === activeContent.name ? 'selected' : ''} className="SubListItem" key={index}>
              <div onClick={() => setActiveContent(content)}>
                {content.name}
              </div>
            </li>
          ))}
        </ul>
        <div className="ImageGallery">
          {activeContent.images.map((image, index) => (
            <div key={index} className="image-container" onClick={() => openImageViewer(index)}>
              <div className="image-info">
                {image.name}
                {image.text}
              </div>
              <Image image={image} index={index} nightmareEnabled={nightmareEnabled} />
            </div>
          ))}
        </div>
        {viewerOpen && (
          <PictureShow
            images={activeContent.images}
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
    console.log(image)
    console.log(image.alt != null)
    if (nightmareEnabled && image.nightmare != null) {
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
  
  export default DrawingContent