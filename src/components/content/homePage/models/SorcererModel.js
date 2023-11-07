
import SorcererImg from '../../../../images/homeImages/sorcerer/0001.png'
import SorcererGif from '../../../../images/homeImages/sorcerer/00011.gif'

import React, { useState, useEffect } from 'react';

const SorcererModel = () => {
  const [isSpeaking, setSpeaking] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [randomWebsite, setRandomWebsite] = useState('');
  const [isRegenerateVisible, setRegenerateVisible] = useState(false);
  const [gifAnimationEnded, setGifAnimationEnded] = useState(false);
  const [initialButtonClicked, setInitialButtonClicked] = useState(false);

  const websites = [
    'https://example.com',
    'https://example2.com',
    'https://example3.com',
  ];

  useEffect(() => {
    if (isSpeaking) {
      // Simulate a delay for the animation
      setTimeout(() => {
        setDisplayText(getRandomWebsite());
        setRegenerateVisible(true);
      }, 3000);
    } else {
      setDisplayText(''); // Reset the text
      setRegenerateVisible(false);
    }
  }, [isSpeaking]);

  const getRandomWebsite = () => {
    const randomIndex = Math.floor(Math.random() * websites.length);
    return websites[randomIndex];
  };

  const handleSpeakClick = () => {
    setSpeaking(true);
  };

  const handleRegenerateClick = () => {
    setDisplayText(getRandomWebsite());
  };

  const handleGifAnimationEnd = () => {
    setGifAnimationEnded(true);
  };

  return (
    <div className="sorcerer-model">
      <img
        src={isSpeaking ? SorcererGif : SorcererImg}
        alt="Sorcerer"
        onAnimationEnd={handleGifAnimationEnd}
      />
      <div className="dialog">
        {initialButtonClicked ? (
          gifAnimationEnded ? (
            isSpeaking ? (
              <div className="animated-text">{displayText}</div>
            ) : (
              <button onClick={handleSpeakClick}>Speak to Sorcerer</button>
            )
          ) : null
        ) : (
          <button onClick={handleSpeakClick}>Speak to Sorcerer</button>
        )}
        {isRegenerateVisible && (
          <button onClick={handleRegenerateClick}>Regenerate</button>
        )}
      </div>
    </div>
  );
};

export default SorcererModel;