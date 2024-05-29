import { Component } from "react";
import ModelViewer from './models/ModelViewer';

import '../../../style.css';

import './homePage.css';
import BoogieSwitch from "../../state/Nightmare/BoogieSwitch";
import SoundComponent from "../../state/soundComponent";
import Smellbound from "../../../images/homeImages/QuatchBound.jpg"
import { Provider, useSelector, useDispatch } from 'react-redux'
import { setFont } from "../../state/Quests/QuestSlice";

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


  return (
    <div className="HomeContent">
      <div className="SmellTitle" style={{ fontFamily: currentFont }}>Smellbound</div>
      <OpeningQuote />
      
      <div className="HomeContentGrid">
        <div className="Left">
        <div className="HomeGridItem">
            - Purpose -
            <br/>
            Smellbound serves as a digital gallery for hand-crafted smell based art pieces. 
            <br/>
            Avant-garde stench class media.
            <br/>
            The kinda stuff you'd find in a pile of mud.

            {/* where am it
            property of James McHugh
            good internet
            welcome to the gallery of smellbound. Collection of hand-crafted smell based artforms. avant garde stench
            french delerium
            parts of smellbound came out of a test tube */}
            

          </div>  
          <div className="HomeGridItem">
            <img src={Smellbound} alt="Smellbound" className="Smellbound"/>
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
          <div className="HomeGridItem">
            <div className="HomeLinks">
              <h3>Links</h3>
              <text>Code: </text>
              <a href="https://github.com/SlowNibbler" target="_blank">Github</a> <br/>
              <text>Games: </text>
              <a href="https://slownibbler.itch.io/" target="_blank">itch.io</a> <br/>
              <text>Mongwa: </text>
              <a href="https://www.google.com/search?client=ms-android-samsung-gs-rev1&sxsrf=APwXEdfyf8zdiWAWC07xt29mHzkC-nsiTg:1683521655237&q=mongwa&tbm=isch&sa=X&ved=2ahUKEwjWnu3x9uT-AhWELn0KHQgiCnMQ0pQJegQIIRAB&biw=412&bih=722&dpr=2.63" target="_blank">????</a> <br/>
              {/* <text>Movies: </text> */}
              {/* <a href="https://letterboxd.com/TheWumboMan/" target="_blank">Letterboxd</a> <br/> */}
              {/* <text>Twitter: </text>
              <a href="" target="_blank">Twitter</a>  */}
              {/* <text>Business: </text> */}
              {/* <a href="https://www.linkedin.com/in/james-mchugh-a8297b163/" target="_blank">Linkedin</a>  */}
            </div>
          </div>
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