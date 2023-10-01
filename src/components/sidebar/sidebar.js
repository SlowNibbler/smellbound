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



import {
  Routes,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

class Sidebar extends Component{
  render() {
    return (
      <div className="Sidebar">
        <h1>Decisions</h1>
        <ul className='list'>
          <SidebarElement id = 'homeIcon' name = 'Home' image = {oval} imageHover = {ovalHover} link = '/' />
          <SidebarElement id = 'artIcon' name = 'Art' image = {cube} imageHover = {cubeHover} link = 'art'/>
          <SidebarElement id = 'gamesIcon' name = 'Games' image = {tri} imageHover = {triHover} link = 'games'/>
          <SidebarElement id = 'codeIcon' name = 'Code' image = {prism} imageHover = {prismHover} link = 'code'/>
          <SidebarElement id = 'mysterysIcon' name = 'Mysterys' image = {oval} imageHover = {ovalHover} link = 'mysterys'/>
        </ul>
      </div>
    );
  }
}


class SidebarElement extends Component{
  handleMouseOver = () => {
      this.imgElement.src = this.props.imageHover;
  };

  handleMouseOut = () => {
      this.imgElement.src = this.props.image;
  };

  render() {
    return (
      <li
        className="SidebarElement"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <Link to={this.props.link}>
          <img
            src={this.props.image}
            alt="Sidebar Image"
            ref={(img) => (this.imgElement = img)} // Assign the img element to a ref
          />
          <span>{this.props.name}</span>
        </Link>
      </li>
    );
  }
}





// write a function that changes the source of an image to the hover version
function hoverIcon(img){
  console.log("img");
  //img.src = img.src.replace(img.src, img.src + 'Hover');
}

export default Sidebar;