
import SorcererImg from '../../../../images/homeImages/sorcerer/0001.png'
import SorcererGif from '../../../../images/homeImages/sorcerer/00011.gif'

import React, { useState, useEffect } from 'react';

import '../../mysterysPage/mysterysPage.css'

const SorcererModel = () => {
  const [isSpeaking, setSpeaking] = useState(false);
  const [hasSpoken, setSpoken] = useState(false);

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
    console.log(isSpeaking || hasSpoken)
    if (isSpeaking) {
      // Simulate a delay for the animation
      setTimeout(() => {
        setDisplayText(getRandomWebsite());
        setRegenerateVisible(true);
        setSpoken(true)
        console.log('timeotu')
        setSpeaking(false)
      }, 4000);
    } else {
      setRegenerateVisible(false);
      console.log('else')
      setSpeaking(false)


    }
  }, [isSpeaking]);

  const getRandomWebsite = () => {
    const randomIndex = Math.floor(Math.random() * websites.length);
    return websites[randomIndex];
  };

  const handleSpeakClick = () => {
    setSpeaking(true);
    setSpoken(false)
  };

  



  return (
    <div className="sorcerer-model">
      <img
        src={isSpeaking ? SorcererGif : SorcererImg}
        alt="Sorcerer"
      />
        {!isSpeaking ? (<button className="sorcerer-button" onClick={handleSpeakClick}>Speak to Sorcerer</button>) : null}

        {(hasSpoken) ? (<a className="animated-text" href={displayText} target='_blank' ><Typewriter text={displayText} delay={50} /></a>) : null}

        {/* {initialButtonClicked ? (
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
        )} */}
    </div>
  );
};


const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex, delay, text]);
  
    return <span>{currentText}</span>;
  };

export default SorcererModel;