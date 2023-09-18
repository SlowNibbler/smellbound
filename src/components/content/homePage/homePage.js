import { Component } from "react";
import ModelViewer from './modelViewer';
import './homePage.css';
import SoundComponent from './soundComponent.js';


class HomePage extends Component{
  render() {
    return (
      <div className="home">
           <span className="homeTitle">Welcome to my website!</span>
           <ModelViewer />
           <SoundComponent />
      </div>
    );
  }
}



export default HomePage;