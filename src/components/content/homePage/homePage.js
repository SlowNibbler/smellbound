import { Component, useState } from "react";
import ModelViewer from './models/ModelViewer';

import '../../../style.css';

import './homePage.css';
import BoogieSwitch from "../../state/Nightmare/BoogieSwitch";
import SoundComponent from "../../state/soundComponent";
import Smellbound from "../../../images/homeImages/QuatchBound4.png"
import Pongo2024 from "../../../images/homeImages/pongo2024_1.png"
import Tumbo from "../../../images/homeImages/tumbo_1.png"
import Pongo1 from "../../../images/homeImages/pongoGifs/pongoGif_01.gif"
import Pongo2 from "../../../images/homeImages/pongoGifs/pongoGif_02.gif"
import Pongo3 from "../../../images/homeImages/pongoGifs/pongoGif_03.gif"
import Pongo4 from "../../../images/homeImages/pongoGifs/pongoGif_04.gif"
import Pongo5 from "../../../images/homeImages/pongoGifs/pongoGif_05.gif"

import HomeArt from "./HomeArt";
import { Provider, useSelector, useDispatch } from 'react-redux'
import { setFont } from "../../state/Quests/QuestSlice";

const images = [Pongo1, Smellbound, Pongo2, Tumbo,  Pongo4, Pongo2024, Pongo5,   ];

class HomePage extends Component{
  render() {
    return(
      <HomeContent/>
    );
  }
}

function HomeContent() {
  const boogieEnabled = useSelector(state => state.quest.boogieEnabled)
  const nightmareEnabled = useSelector((state) => state.quest.nightmareEnabled);
  const currentFont = useSelector((state) => state.quest.currentFont);

  const dispatch = useDispatch();

  const changeFontFamily = () => {

    //if (nightmareEnabled) {
      dispatch(setFont('Helvetica, sans-serif'));
    //} 
  };

  const fontFamilies = [
    'Positions',
    // Add more font families as needed
  ];
  
  function loadFonts() {
    // Load your font files dynamically
    fontFamilies.forEach((fontFamily) => {
      const font = new FontFace(fontFamily, `url('../../../fonts/${fontFamily}.otf')`, {});
      document.fonts.add(font);
    });
  }

  //const [currentFont, setCurrentFont] = useState(fontFamilies[0]);

  const changeFont = () => {
    const randomFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    console.log(randomFont)
    dispatch(setFont(randomFont));
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    // Implement logic to go to the next image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    // Implement logic to go to the previous image
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className="HomeContent">
      <div className="SmellTitle" style={{ fontFamily: currentFont }}>Smellbound</div>
      <OpeningQuote />
      
      <div className="HomeContentGrid">
        <div className="Left">

          <div className="HomeGridItem">
            <HomeArt images={images}
            currentIndex={currentImageIndex}
            nextImage={nextImage}
            prevImage={prevImage}/>
            {/* <img src={Smellbound} alt="Smellbound" className="Smellbound"/> */}
          </div>
          <div className="HomeGridItem">
            <div className="HomeLinks">
              <h3>Links</h3>
              <a href="https://x.com/slownibbler" target="_blank">Twitter</a> <br/>
              <a href="https://x.com/slownibbler" target="_blank">Instagram</a> <br/>

              {/* <text>Code: </text> */}
              {/* <a href="https://github.com/SlowNibbler" target="_blank">Github</a> <br/> */}
              {/* <text>Games: </text> */}
              <a href="https://slownibbler.itch.io/" target="_blank">itch.io</a> <br/>
              {/* <text>Mongwa: </text> */}
              <a href="https://www.google.com/search?client=ms-android-samsung-gs-rev1&sxsrf=APwXEdfyf8zdiWAWC07xt29mHzkC-nsiTg:1683521655237&q=mongwa&tbm=isch&sa=X&ved=2ahUKEwjWnu3x9uT-AhWELn0KHQgiCnMQ0pQJegQIIRAB&biw=412&bih=722&dpr=2.63" target="_blank">????</a> <br/>
              {/* <text>Movies: </text> */}
              {/* <a href="https://letterboxd.com/TheWumboMan/" target="_blank">Letterboxd</a> <br/> */}
              {/* <text>Twitter: </text> */}
              {/* <text>Business: </text> */}
              {/* <a href="https://www.linkedin.com/in/james-mchugh-a8297b163/" target="_blank">Linkedin</a>  */}
            </div>
          </div>
          
          {/* <div className="HomeGridItem">
            restore internet harmony
            digital demogogue
          </div>   */}
        </div>
        <div className="Right">
          <div className="HomeGridItem" id="ModelViewerHolder">
            <ModelViewer/>
          </div>
          {/* <div className="HomeGridItem">
            <div className="HomeLinks">
              <h3>Good Stuff</h3>
            </div>
          </div> */}
          
          <BoogieSwitch boo={boogieEnabled} />

          <SoundComponent />
        </div>
      </div>
    </div>
  );
}

// function that returns a div containting a random string from a list of strings
function OpeningQuote() {
  const quotes = [
    "Welcome to Smellbound",
    "Welcome to Baseball",
    "Welcome to Mesopotamia",
    "Welcome to the Bathroom",
    "Welcome to Dirt Site",
    "Welcome to Wallace & Gromit"
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="HomeTitle">{randomQuote}</div>
  );
}



export default HomePage;