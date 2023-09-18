import { Component } from "react";
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


// rename ArtContainer to MysterysContainer and rewrite the class to match the new name

class MysterysContainer extends Component{
  render() {
    return (
      <div className="mystery">
        <p>There is a mystery here. Can you find it?</p>
        <FlashingImage/>
           
      </div>
    );
  }
}


// react component that is an image which flashes between two images and randomly changes it's location on the screen every 30 seconds
class FlashingImage extends Component{
  render() {
    return (
      <div className="flashingImage">
        <image src="https://i.imgur.com/4Q3QW0u.png" alt="flashing image" />
        
      </div>
    );
  }
}


export default MysterysContainer;