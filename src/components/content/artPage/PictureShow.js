import React from 'react';
import './artPage.css'

const PictureShow = ({ images, currentIndex, closeViewer, nextImage, prevImage }) => {
  const image = images[currentIndex];

  return (
    <div className="image-viewer-overlay" onClick={closeViewer}>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-container-big">
          <img src={image.image} alt={image.name} />
        </div>
        <button className="prev-button" onClick={prevImage}>
          &lt; Previous
        </button>
        <button className="next-button" onClick={nextImage}>
          Next &gt;
        </button>
        <button className="close-button" onClick={closeViewer}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PictureShow;