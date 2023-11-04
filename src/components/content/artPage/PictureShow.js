import React from 'react';
import './artPage.css'
import { Component } from "react";


import ArrowLeft from '../../../images/shapes/leftArrow.gif'
import ArrowLeftAlt from '../../../images/shapes/leftArrow1.gif'
import ArrowRight from '../../../images/shapes/rightArrow.gif'
import ArrowRightAlt from '../../../images/shapes/rightArrow1.gif'

const PictureShow = ({ images, currentIndex, closeViewer, nextImage, prevImage }) => {
  const image = images[currentIndex];

  return (
    <div className="image-viewer-overlay" onClick={closeViewer}>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        {/* <div class="handle-left" onClick={prevImage}>
          <div class="arrow-left" />
        </div> */}

        <div className="image-container-big">
        <div className="close-button" onClick={closeViewer}>
          X
        </div>
          <img src={image.image} alt={image.name} />
        </div>
        {/* <div class="handle-right" onClick={nextImage}>
          <div class="arrow-right" />
        </div> */}

        <div className='image-info-bottom'>
          <div onClick={prevImage}>
            <Arrow image={ArrowLeft} imageHover={ArrowLeftAlt} />
          </div>
          <div className='image-info-bottom-desc'>
            <div>{image.name}</div>
            
            <div>{image.text}</div>
            
          </div>
          <div onClick={nextImage}>
            <Arrow image={ArrowRight} imageHover={ArrowRightAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

class Arrow extends Component{

  mouseOver = false;

  handleMouseOver = () => {
    this.imgElement.src = this.props.image;
    this.mouseOver = true;
  };

  handleMouseOut = () => {
    this.imgElement.src = this.props.imageHover;
    this.mouseOver = false;
  };

  render() {
    return (
      <div
        className="Arrow"
        onMouseEnter={this.handleMouseOver}
        onMouseLeave={this.handleMouseOut}
      >
        <img src={this.props.imageHover}ref={(img) => (this.imgElement = img)} />
      </div>
    );
  }


}

export default PictureShow;