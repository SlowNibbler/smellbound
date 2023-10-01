import { Component } from "react";
import ModelViewer from './modelViewer';
import './homePage.css';
import NightmareSwitch from "./nightmareSwitch";
import SoundComponent from "./soundComponent";


class HomePage extends Component{
  render() {
    return (
      <div className="home">
           <span className="homeTitle">Welcome to my website!</span>
           <ModelViewer />
           <NightmareSwitch />
           <SoundComponent />
      </div>
    );
  }
}



export default HomePage;