import React, { useState } from 'react';

import './mysterysPage.css'

import image1 from '../../../images/GoodImages/1.jpg'
import image2 from '../../../images/GoodImages/2.jpg'


const imageList = [
  image1,
  image2,
  // Add more image URLs here
];

function FreeImage() {
  const [currentImage, setCurrentImage] = useState(getRandomImage());

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  }

  const handleChangeImage = () => {
    const newImage = getRandomImage();
    setCurrentImage(newImage);
  };

  return (
    <div className='FreeImages'>
      <div>Images to look at</div>
      <img src={currentImage} alt="Random Image" />
      <button onClick={handleChangeImage}>Give me a new image</button>
    </div>
  );
}

export default FreeImage;