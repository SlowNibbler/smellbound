import { Component } from "react";
import './sidebar.css'

import ovalHover from '../../images/shapes/Oval_Hover.gif'
import oval from '../../images/shapes/Oval.gif'
import cube from '../../images/shapes/Cube.gif'
import cubeHover from '../../images/shapes/Cube_Hover.gif'
import tri from '../../images/shapes/Tri.gif'
import triHover from '../../images/shapes/Tri_Hover.gif'
import prism from '../../images/shapes/Prism.gif'
import prismHover from '../../images/shapes/Prism_Hover.gif'

import ham from '../../images/ham.png'
import cross from '../../images/cross.png'

import {
  Routes,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

class MobileSidebar extends Component{
  render() {
    return (
      <div className="Sidebar" id="MobileSidebar">
        <h2>Decisions</h2>
        <ul className='list'>
          <SidebarElement id = 'homeIcon' name = 'Home' image = {oval} imageHover = {ovalHover} link = '/' />
          <SidebarElement id = 'artIcon' name = 'Art' image = {cube} imageHover = {cubeHover} link = 'art'/>
          <SidebarElement id = 'gamesIcon' name = 'Games' image = {tri} imageHover = {triHover} link = 'games'/>
          <SidebarElement id = 'codeIcon' name = 'Code' image = {prism} imageHover = {prismHover} link = 'code'/>
          <SidebarElement id = 'mysterysIcon' name = 'Mystery' image = {oval} imageHover = {ovalHover} link = 'mystery'/>
        </ul>
      </div>
    );
  }
}

/**
 * button class that is either off or on and moves a div when clicked
 */
class SidebarButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      position: 0
    };
  }

  handleClick = () => {
    console.log('fsfsdfsfsfsf')
    const newTransformValue = this.state.on ? 'translateX(0px)' : 'translateX(-250px)';
    this.setState({
      on: !this.state.on,
      position: document.getElementById('MobileSidebar').style.transform = newTransformValue
    });
  };

  render() {
    return (
      <div>
        <div className="SidebarButton">
          <button onClick={this.handleClick}>
            {this.state.on ? <img src={ham}/> : <img src={cross}/>}
          </button>
          <span>
          </span>
        </div>
        <div>
          <MobileSidebar/>
        </div>
      </div>

    );
  }
}



class SidebarElement extends Component{

  mouseOver = false;

  handleMouseOver = () => {
      if (this.mouseOver === false) {
        this.imgElement.src = this.props.imageHover;
        this.mouseOver = true;
        //console.log(this.mouseOver);
      }
  };

  handleMouseOut = () => {
    this.imgElement.src = this.props.image;
    this.mouseOver = false;
    //console.log(this.mouseOver);
  };


  render() {
    return (
      <li
        className="SidebarElement"
      >
        <Link to={this.props.link}
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseOut}>
          <img
            src={this.props.image}
            alt="Sidebar Image"
            ref={(img) => (this.imgElement = img)} // Assign the img element to a ref
            style={{ display: "block" }}
          />
          <span>{this.props.name}</span>
        </Link>
      </li>
    );
  }
}




// write a function that changes the source of an image to the hover version
function hoverIcon(img){
  //console.log("img");
  //img.src = img.src.replace(img.src, img.src + 'Hover');
}

export {MobileSidebar, SidebarButton};