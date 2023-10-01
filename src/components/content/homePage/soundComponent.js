import React, { useEffect } from 'react';
import moneky from '../../../audio/monkey.mp3'

const audio = new Audio(moneky);

function SoundComponent(){
  useEffect(() => {
    const handleSounds = (event) => {
      if (event.type === 'disableSounds') {
        // Disable sounds logic here
        audio.pause();
        console.log('Sounds disabled');
      } else if (event.type === 'enableSounds') {
        audio.play();
        console.log('Sounds enabled');
      }
    };

    window.addEventListener('disableSounds', handleSounds);
    window.addEventListener('enableSounds', handleSounds);

    return () => {
      window.removeEventListener('disableSounds', handleSounds);
      window.removeEventListener('enableSounds', handleSounds);
    };
  }, []);
};

export default SoundComponent;