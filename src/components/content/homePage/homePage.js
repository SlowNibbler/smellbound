import { Component } from "react";
import ModelViewer from './modelViewer';
import './homePage.css';
import NightmareSwitch from "../../state/NightmareSwitch";
import SoundComponent from "../../state/soundComponent";
import Smellbound from "../../../images/homeImages/smelldev.png"
import { Provider, useSelector } from 'react-redux'


class HomePage extends Component{
  render() {
    return(
      <HomeContent/>
    );
  }
}

function HomeContent() {
  const nightmareEnabled = useSelector(state => state.nightmareEnabled)

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
          <NightmareSwitch nightmareEnabled={nightmareEnabled} />
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