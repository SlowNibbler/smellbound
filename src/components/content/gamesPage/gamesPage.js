import { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import '../../../style.css'
import './gamesPage.css'


import babelThumb from '../../../images/Games/babelThumb.png'
import bigIromThumb from '../../../images/Games/bigironThumb.png'
import sotbsThumb from '../../../images/Games/sotbsThumb.png'
import pongoThumb from '../../../images/homeImages/pongoGifs/pongoGif_02.gif'


class GamesContainer extends Component{
  render() {
    return (
      <div className="gamerContent">
        <div className="gameInfo">
          <h1>Games</h1>
        </div>
        <div className="games">
        <GameCard title="Pongo's Big Day Out" url="https://www.youtube.com/watch?v=DJsn1QivbKM" 
                  desc="I'm gonna have Pongo work for the post office and walk around in nice places." 
                  year="idk" img={pongoThumb} linkText="Opening Cutscene" link="https://www.youtube.com/watch?v=DJsn1QivbKM"/>
          <GameCard title="Secrets of the Bering Sea" url="https://slownibbler.itch.io/sotbs" 
                  desc="Third-person crab-based shooter. Run around as a Deadliest Catch youtuber fighting off waves of crab
                  on the Bering Sea to save Captain Keith whose been turned into a shape. Real hard hitting stuff here.
                  Learned Unreal engine and had to get good at Blender for this one. 
                  My post-graduate portfolio project for the job market." 
                  year="2020" img={sotbsThumb} linkText="Fierce Lion Vlogs" link="https://www.youtube.com/channel/UCfXVLUdoydkH7VJS-oHd9sA"/>
          <GameCard title="Big Iron" url="https://slownibbler.itch.io/big-iron" 
                  desc="Sidescroller 'shooter' based off of Big Iron by Marty Robins. A solo game right after Town of Babel in order to keep pushing myself to learn
                  game dev. This was originally planned to be styled like JoJo. That would have been the ultimate scope-creep." year="2020" img={bigIromThumb}
                  link="https://www.youtube.com/watch?v=0SKqhOE_fUI&list=PLCDb_HDeMgcmPw-FmkKPAnWfwIG3MWpGJ&index=8&t=1s"
                  linkText="Big Iron - Marty Robins"/>
          <GameCard title="Town of Babel" url="https://townofbabel.github.io/" 
                  desc="Hotline Miami but bad. First game I made. Did it for a college project with this dude
                  Dylan Hill. I did all the art, was pretty fun. A game that begs the question of what if Lil Pump
                  had to deal with a Tower of Babel type situation but somewhere in middle america and he also had
                  to fight other rappers?? It's harder than Dark Souls 2." year="2020" img={babelThumb} linkText="Trailer" 
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