import { Component } from "react";
import './sidebar.css'
import ovalHover from '../../images/Oval_Hover.gif'
import {
  Routes,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

class Sidebar extends Component{
  render() {
    return (
      <div className="sidebar">
        <nav>
        <ul>
          <SidebarElement id = 'homeIcon' name = 'Home' image = {ovalHover} link = '/' />
          <SidebarElement name = 'Art' link = 'art'/>
          <SidebarElement name = 'Games' link = 'games'/>
          <SidebarElement name = 'Code' link = 'code'/>
          <SidebarElement name = 'Mysterys' link = 'mysterys'/>
        </ul>
      </nav>
        <h1>Decisions</h1>
        <ul className='list'>
          
          
        </ul>
      </div>
    );
  }
}


class SidebarElement extends Component{
  render() {
    return (
      <li className="sidebarElement">
        <Link to={this.props.link}>
          {this.props.name}
          <img src={this.props.image}/>
        </Link>
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