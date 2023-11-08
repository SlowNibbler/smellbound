import { Component } from "react";
import ModelViewer from './models/ModelViewer';

import './homePage.css';
import BoogieSwitch from "../../state/Nightmare/BoogieSwitch";
import SoundComponent from "../../state/soundComponent";
import Smellbound from "../../../images/homeImages/QuatchBound.jpg"
import { Provider, useSelector } from 'react-redux'


class HomePage extends Component{
  render() {
    return(
      <HomeContent/>
    );
  }
}

function HomeContent() {
  const boogieEnabled = useSelector(state => state.boogieEnabled)

  return (
    <div className="HomeContent">
      <div className="SmellTitle">Smellbound</div>
      <OpeningQuote />
      
      <div className="HomeContentGrid">
        <div className="Left">
        <div className="HomeGridItem">
            where am it
            property of James McHugh
            good internet
            welcome to the gallery of smellbound. Collection of hand-crafted smell based artforms. avant garde stench
            french delerium
            parts of smellbound came out of a test tube
            

          </div>  
          <div className="HomeGridItem">
            <img src={Smellbound} alt="Smellbound" className="Smellbound"/>
          </div>
          
          <div className="HomeGridItem">
            what is it
            restore internet harmony
            digital demogogue
          </div>  
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
              <text>Movies: </text>
              <a href="https://letterboxd.com/TheWumboMan/" target="_blank">Letterboxd</a> <br/>
              {/* <text>Twitter: </text>
              <a href="" target="_blank">Twitter</a>  */}
              <text>Business: </text>
              <a href="https://www.linkedin.com/in/james-mchugh-a8297b163/" target="_blank">Linkedin</a> 
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
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="HomeTitle">{randomQuote}</div>
  );
}



export default HomePage;