import { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import '../gamesPage/gamesPage.css'

import babelThumb from '../../../images/Games/babelThumb.png'
import bigIromThumb from '../../../images/Games/bigironThumb.png'
import sotbsThumb from '../../../images/Games/sotbsThumb.png'

class CodeContainer extends Component{
  render() {
    return (
      <div className="gamerContent">
        <div className="gameInfo">
          <h1>Code</h1>
          <p>Computer is for the worms
          </p>
        </div>
        <div className="games">
          <GameCard title="Pocket Dungeon" url="https://github.com/SlowNibbler/PocketDungeonAlt"
                  desc="D&D companion app I made for an android development class.
                        I spent countless late nights reworking the entire app around week 5 or
                        so because my team and I had built ourselves into a corner. I don't want
                        to touch android code for a while after that." year="Spring 2020" img={babelThumb}/>
          <GameCard title="MudRoom" url="anim.html"
                  desc="Internet mudroom." year="Winter 2020" img={babelThumb}/>
          <GameCard title="Zombie AI" url="zombies.html"
                  desc="Final project for an AI class. The lil green guys are taking their orders
                        from my AI and try to stay 'alive' for as long as possible by throwing
                        'rocks' at the red zombie fellas. My guys do alright." year="Winter 2020" img={babelThumb}/>
          <GameCard title="2048 AI" url="2048.html"
                  desc="AI I made to get as far as possible in 2048. I've seen it go pretty far." 
                  year="Winter 2020" img={babelThumb}/>
          <GameCard title="Pacman AI" url="pacman.html"
                  desc="After a week or two of struggling on this one, I had a 2am epiphony
                        that I needed 'to make pacman act more like an octopus and less like a saucer' 
                        and it ended up getting me my final solution. I still see him goof
                        up sometimes which is how I can tell it was a 2am solution." year="Winter 2020" img={babelThumb}/>
          <GameCard title="Tic Tac Toe AI" url="tictactoe.html"
                  desc="It's a tic tac toe AI squarring off against a rigorous set of tests but too fast
                  for you to know what's going on. At least I think that's what it's doing. It's been a while."
                  year="Winter 2020" img={babelThumb}/>

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



export default CodeContainer;