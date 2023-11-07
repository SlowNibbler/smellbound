import { Component } from "react";

import './mysterysPage.css';
import { Provider, useSelector } from 'react-redux'

import SorcererModel from '../homePage/models/SorcererModel'

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
      <div className="SmellTitle">Smellbound</div>
      <OpeningQuote />
      
      <div className="HomeContentGrid">
        <div className="Left">
          <div className="HomeGridItem">
          </div>
          <div className="HomeGridItem">
            where am it
            property of James McHugh
            good internet
            welcome to the gallery of smellbound. Collection of hand-crafted smell based artforms. avant garde stench
            french delerium
            parts of smellbound came out of a test tube
            

          </div>  
          <div className="HomeGridItem">
            what is it
            restore internet harmony
            digital demogogue
            https://en.wikipedia.org/wiki/Leader_of_the_Chinese_Communist_Party
          </div>  
          <div className="HomeGridItem">
            here are three images
            <SorcererModel />
          </div>
        </div>
        <div className="Right">

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