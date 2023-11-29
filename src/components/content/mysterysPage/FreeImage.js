import React, { useState } from 'react';

import './mysterysPage.css'

import image1 from '../../../images/GoodImages/1.jpg'
import image2 from '../../../images/GoodImages/2.jpg'
import image3 from '../../../images/GoodImages/3.jpg'
import image4 from '../../../images/GoodImages/4.jpg'
import image5 from '../../../images/GoodImages/5.jpg'
import image6 from '../../../images/GoodImages/6.jpg'
import image7 from '../../../images/GoodImages/7.jpg'
import image8 from '../../../images/GoodImages/8.jpg'
import image9 from '../../../images/GoodImages/9.jpg'
import image10 from '../../../images/GoodImages/10.jpg'
import image11 from '../../../images/GoodImages/11.jpg'
import image12 from '../../../images/GoodImages/12.jpg'
import image13 from '../../../images/GoodImages/13.jpg'


const imageList = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13
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