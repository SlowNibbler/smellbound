import { Component } from "react";
import './sidebar.css'
import ovalHover from '../../images/Oval_Hover.gif'
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Sidebar extends Component{
  render() {
    return (
      <div className="sidebar">
        <h1>Decisions</h1>
        <ul className='list'>
          
          <SidebarElement id = 'homeIcon' name = 'Home' image = {ovalHover}/>
          <SidebarElement name = 'Art'/>
          <SidebarElement name = 'Games'/>
          <SidebarElement name = 'Code'/>
          <SidebarElement name = 'Mysterys'/>
        </ul>
      </div>
    );
  }
}

class SidebarElement extends Component{
  render() {
    return (
      <li className="sidebarElement">
        <NavLink to="/">
          {this.props.name}
          <img src={this.props.image}/>
        </NavLink>
      </li>
    )
  }
}


// react component that takes a string and image and returns a div with the image and string centered
class SidebarElement2 extends Component{
  render() {
    return (
      <div>
        {this.props.name}
        <img src={this.props.image}/>
      </div>
    )
  }
}

export default Sidebar;