import React, { useEffect } from 'react';
import moneky from '../../audio/monkey.mp3'

const audio = new Audio(moneky);

function SoundComponent(){
  useEffect(() => {
    const handleNightmare = (event) => {
      if (event.type === 'disableNightmare') {
        // Disable Nightmare logic here
        audio.pause();
        console.log('monkey disabled');
      } else if (event.type === 'enableNightmare') {
        audio.play();
        console.log('monkey enabled');
      }
    };

    window.addEventListener('disableNightmare', handleNightmare);
    window.addEventListener('enableNightmare', handleNightmare);

    return () => {
      window.removeEventListener('disableNightmare', handleNightmare);
      window.removeEventListener('enableNightmare', handleNightmare);
    };
  }, []);
};

export default SoundComponent;