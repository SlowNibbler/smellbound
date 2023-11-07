import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import JohnnyBGood from '../../audio/cave1.mp3'
import caveSounds from './caveSounds'; // An array of your audio clips
import { selectNightmareEnabled } from '../state/Quests/QuestSlice';

import giff from '../../images/homeImages/wall1.gif'
import pnngg from '../../images/homeImages/wall1.png'


const CaveSounds = () => {
    const dispatch = useDispatch();
    const nightmareEnabled = useSelector((state)=>state.quest.nightmareEnabled)
    const [backgroundImage, setBackgroundImage] = useState(pnngg);
  
    useEffect(() => {
      let soundInterval;
        console.log('nifds' + nightmareEnabled)
      if (nightmareEnabled) {

        soundInterval = setInterval(() => {
          const randomSound = JohnnyBGood;//caveSounds[Math.floor(Math.random() * caveSounds.length)];
          const gifImage = giff; // Replace with the actual GIF file

          setBackgroundImage(gifImage);
          console.log('playy')

          const audio = new Audio(randomSound);
          audio.play();
  
          audio.onended = () => {
            setBackgroundImage(pnngg);
          };
        }, Math.floor(Math.random() * (50000 - 30000) + 30000)); // Random time between 30-50 seconds
      }
  
      return () => {
        if (soundInterval) clearInterval(soundInterval);
      };
    }, [nightmareEnabled]);
  
    return (
      <div className="cave-sounds" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
    );
  };
  
  export default CaveSounds;