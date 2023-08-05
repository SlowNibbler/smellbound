import { Component } from "react";
import './sidebar.css'
import ovalHover from '../../images/Oval_Hover.gif'

class Sidebar extends Component{
  render() {
    return (
      <div className="sidebar">
        <h1 id='decisisons'>Decisions</h1>
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
      <li>
        <img src={this.props.image}/>
        {this.props.name}
      </li>
    )
  }
}

export default Sidebar;