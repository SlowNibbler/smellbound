
import SorcererImg from '../../../../images/homeImages/sorcerer/sorcIdle.gif'
import SorcererGif from '../../../../images/homeImages/sorcerer/sorcTalk.gif'

import React, { useState, useEffect } from 'react';

import '../../mysterysPage/mysterysPage.css'

const SorcererModel = () => {
  const [isSpeaking, setSpeaking] = useState(false);
  const [hasSpoken, setSpoken] = useState(false);

  const [displayText, setDisplayText] = useState({name: 'name', linko: 'link'});
  const [randomWebsite, setRandomWebsite] = useState('');
  const [isRegenerateVisible, setRegenerateVisible] = useState(false);
  const [gifAnimationEnded, setGifAnimationEnded] = useState(false);
  const [initialButtonClicked, setInitialButtonClicked] = useState(false);

  const websites = [
    {
      name: 'Virtual Bart',
      link0: 'https://www.google.com/search?q=virtual+bart&oq=virtual+bart&aqs=chrome..69i57j35i39j0l4.2083j0j7&sourceid=chrome&ie=UTF-8'
    },
    {
      name: 'Sloan Nibley',
      linko: 'https://www.google.com/search?gs_ssp=eJzj4tLP1TcwSS8sMSo0YPTiKc7JT8xTyMtMykmtBABqQwh6&q=sloan+nibley&oq=sloane+nibbley&aqs=chrome.1.69i57j46i13.4270j0j9&client=ms-android-samsung-gs-rev1&sourceid=chrome-mobile&ie=UTF-8'
    },
    {
      name: 'Heavy Metal',
      linko: 'https://www.google.com/search?q=heavy+metal+magazine+covers+1970s&tbm=isch&ved=2ahUKEwilodOhvcn-AhVIAzQIHTSHDFYQ2-cCegQIABAC&oq=heavy+metal+magazine+covers+&gs_lcp=ChJtb2JpbGUtZ3dzLXdpei1pbWcQARgBMgUIABCABDIFCAAQgAQyBAgAEB4yBggAEAUQHjIGCAAQBRAeOgQIIxAnOgYIABAHEB5QkwVYkwVg4AtoAHAAeACAAXeIAesBkgEDMC4ymAEAoAEBwAEB&sclient=mobile-gws-wiz-img&ei=KRxKZOXoEMiG0PEPtI6ysAU&bih=722&biw=412&client=ms-android-samsung-gs-rev1'
    },
    {
      name: 'Anyone Can Cook',
      linko: 'https://youtu.be/S_zpTByvjFE?si=myWGZQ81SG9LJY1n'
    },
    {
      name: 'Mongwa',
      linko: 'https://www.google.com/search?client=ms-android-samsung-gs-rev1&sxsrf=APwXEdfyf8zdiWAWC07xt29mHzkC-nsiTg:1683521655237&q=mongwa&tbm=isch&sa=X&ved=2ahUKEwjWnu3x9uT-AhWELn0KHQgiCnMQ0pQJegQIIRAB&biw=412&bih=722&dpr=2.63'
    },    
    {
      name: 'Steve R Dodd',
      linko: 'https://www.google.com/search?sxsrf=APwXEddcxXEoh7iOLO7r6-kdUR1mdI9EKw:1684791569243&q=steve+r+dodd&tbm=isch&sa=X&ved=2ahUKEwivgIXY8Yn_AhVSMH0KHfkCDG4Q0pQJegQICRAB&biw=1707&bih=802&dpr=1.13'
    },    
    {
      name: 'Atomic Power Android',
      linko: 'https://www.google.com/search?q=atomic+power+android+manga+cover&tbm=isch&ved=2ahUKEwjKwpfQuqX7AhXLHzQIHS9BDBcQ2-cCegQIABAC&oq=atomic+power+android+manga+cover&gs_lcp=ChJtb2JpbGUtZ3dzLXdpei1pbWcQAzIFCAAQogQ6BAgjECc6BAgAEB46BQghEKsCUKUFWNvMAmCB0QJoBnAAeACAAacBiAG4EJIBBDAuMTSYAQCgAQHAAQE&sclient=mobile-gws-wiz-img&ei=8-VtY4r9Gsu_0PEPr4KxuAE&bih=722&biw=412&client=ms-android-samsung-gs-rev1&prmd=ivn'
    },    
    {
      name: 'Hiroshi Nagai',
      linko: 'http://www.hiroshinagai.com/contents.html'
    },
    {
      name: 'Chiara Bautista',
      linko: 'https://www.google.com/search?q=chiara+bautista&client=ms-android-verizon&hl=en&prmd=isnv&sxsrf=ACYBGNRYMrooQdj9lJgwMFUxEHOBJEmXtQ:1570406577480&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjhkdCx7IjlAhXIvp4KHVs6CpoQ_AUIFigB&cshid=1570406577728&biw=360&bih=560&dpr=3'
    },
    {
      name: 'Stanley Borrack',
      linko: 'https://www.google.com/search?q=stanley+borack&tbm=isch&ved=2ahUKEwiZ_MPq_YfsAhWGh54KHZ6GB3oQ2-cCegQIABAA&oq=borack+sta&gs_lcp=CgNpbWcQARgAMgYIABAIEB4yBggAEAgQHjoECCMQJzoFCAAQsQM6AggAOggIABCxAxCDAToECAAQQzoHCAAQsQMQQzoGCAAQBRAeOgYIABAKEBg6BAgAEBhQ0nNYmYwBYOCRAWgBcAB4AIABP4gB6gSSAQIxMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=2s9vX5mnA4aP-gSejZ7QBw&bih=937&biw=1920&rlz=1C1CHBF_enUS871US871'
    },
    {
      name: 'Francisco Goya',
      linko: 'https://www.google.com/search?client=ms-android-verizon&bih=269&biw=360&hl=en&sxsrf=ALeKk027G8DAcquiIDFSzUbHzObH0Q52tg%3A1601690863552&ei=79x3X8yTIa_O0PEPtvyLuAQ&q=francisco+goya'
    },
    {
      name: '50\'s Travel Posters',
      linko: 'https://www.madmenart.com/travel-posters/air-france-dans-tous-les-ciels-1948/'
    },
  ];

  useEffect(() => {
    console.log(isSpeaking || hasSpoken)
    if (isSpeaking) {
      setTimeout(() => {
        setDisplayText(getRandomWebsite());
        setRegenerateVisible(true);
        setSpoken(true)
        console.log('timeotu')
        setSpeaking(false)
      }, 1000);
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
        {!isSpeaking ? (<button className="sorcerer-button" onClick={handleSpeakClick}>Commune With The Sorcerer</button>) : null}

        {(hasSpoken) ? (<a className="animated-text" href={displayText.linko} target='_blank' ><Typewriter text={displayText.name} delay={50} /></a>) : null}

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