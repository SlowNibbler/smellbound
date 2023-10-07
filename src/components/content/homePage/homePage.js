import { Component } from "react";
import ModelViewer from './modelViewer';
import './homePage.css';
import NightmareSwitch from "./nightmareSwitch";
import SoundComponent from "./soundComponent";
import Smellbound from "../../../images/homeImages/smelldev.png"


class HomePage extends Component{
  render() {
    return (
      <div className="HomeContent">
        <div className="Name">Smellbound</div>
        <OpeningQuote />
        
        <div className="HomeContentGrid">
          <div className="Left">
            <div className="HomeGridItem">
              <img src={Smellbound} alt="Smellbound" className="Smellbound"/>
            </div>
            <div className="HomeGridItem">
              where am it
            </div>  
            <div className="HomeGridItem">
              what is it
            </div>  
          </div>
          <div className="Right">
            <div className="HomeGridItem" id="ModelViewerHolder">
              <ModelViewer/>
            </div>
            <div className="HomeGridItem">
              <img src={Smellbound} alt="Smellbound" className="Smellbound"/>
            </div>
            <NightmareSwitch />
            <SoundComponent />
          </div>
        </div>
      </div>
    );
  }
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