import { Component } from "react";

import './mysterysPage.css';
import { Provider, useSelector } from 'react-redux'

import SorcererModel from '../homePage/models/SorcererModel'

import ThemeSelect from "./ThemeSelect";

import NightmareSwitch from '../../state/Nightmare/NightmareSwitch'
import CaveSwitch from "../../state/Nightmare/CaveSwitch";
import FreeImage from './FreeImage'



class MysterysPage extends Component{
  render() {
    return(
      <MysteryContent/>
    );
  }
}

function MysteryContent() {
  const nightmareEnabled = useSelector(state => state.nightmareEnabled)

  return (
    <div className="HomeContent">
      <div className="SmellTitle">Mysteries</div>
      
      <div className="HomeContentGrid">
        <div className="Left">
          <div className="HomeGridItem">
            <FreeImage/>
          </div>
          <div className="HomeGridItem">
            <h3 className="headder">
              Themes
            </h3>
           <ThemeSelect/>
            

          </div>  
          <CaveSwitch/>
          
        </div>
        <div className="Right">
          <div className="HomeGridItem">
            <SorcererModel />
          </div>
          <NightmareSwitch/>
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



export default MysterysPage;