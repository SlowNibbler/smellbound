import { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './gamesPage.css'

import babelThumb from '../../../images/Games/babelThumb.png'
import bigIromThumb from '../../../images/Games/bigironThumb.png'
import sotbsThumb from '../../../images/Games/sotbsThumb.png'

class GamesContainer extends Component{
  render() {
    return (
      <div className="gamerContent">
        <div className="gameInfo">
          <h1>SmellBound Games</h1>
          <p>Games are where it all comes together. Art, code, fun - everything. The modern day equivalent to the shit Da Vinci was doing
          </p>
        </div>
        <div className="games">
          <GameCard title="Secrets of the Bering Sea" url="https://slownibbler.itch.io/sotbs" 
                  desc="Third-person crab-based shooter.
                  After graduating from college with a degree in Computer Science, I decided, 
                  like any rational adult would, that the best way to gain experience in order to be hired in my 
                  field would be to create a third-person shooter based on a guy that reviews Deadliest Catch episodes." 
                  year="2020" img={sotbsThumb} linkText="Fierce Lion Vlogs" link="https://www.youtube.com/channel/UCfXVLUdoydkH7VJS-oHd9sA"/>
          <GameCard title="Big Iron" url="https://slownibbler.itch.io/big-iron" 
                  desc="Sidescroller 'shooter' based off of Big Iron by Marty Robins. A solo game right after Town of Babel in order to keep pushing myself to learn
                  game dev. This was originally planned to be styled like JoJo, but that pushed the scope
                  way beyond the time I had to work on it." year="2020" img={bigIromThumb}
                  link="https://www.youtube.com/watch?v=0SKqhOE_fUI&list=PLCDb_HDeMgcmPw-FmkKPAnWfwIG3MWpGJ&index=8&t=1s"
                  linkText="Big Iron - Marty Robins"/>
          <GameCard title="Town of Babel" url="https://townofbabel.github.io/" 
                  desc="Hotline Miami x Rougelike but not that good. Shout out to TCSS 491 an Chris Marriott for gettin me into game dev.
                  I did all the art an design and a fella by the name of Dylan Hill is 
                  responsible for most all of the coding. He seems to have kept updating the 
                  game and put a bunch of corny warnings when you start. I'm not affiliated with
                  those." year="2020" img={babelThumb} linkText="Trailer" 
                  link="https://www.youtube.com/watch?v=ZmHowtpinvc"/>

        </div>
    </div>
    );
  }
}


const GameCard = ({title, url, desc, year, img, linkText, link}) => {
  return(
    <div className="gameCard">
      <div className="gameTitleandYear">
        <a href={url} target="_blank" className="gameTitle">{title}</a>
        <text className="gameYear">({year})</text>
      </div>
      <br/>
      <div className="gameContent">
        <a href={url} target="_blank">
          <img className="gamePic" src={img}></img>
        </a>
        <text className="gameDesc">{desc}</text>
        <br/>
        <br/>
        <a className="gameLink" href={link} target="_blank">{linkText}</a>
      </div>
    </div>
  );
}



export default GamesContainer;