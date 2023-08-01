import { Component } from "react";
import './sidebar.css'

class Sidebar extends Component{
  render() {
    return (
      <div className="Sidebar" style={{color: "blue"}}>
        <h1 className='decisisons'>Decisions</h1>
        <ul className='list'>
          <SidebarElement name = 'Home'/>

          <li>Home</li>
          <li>Art</li>
          <li>Games</li>
          <li>Code</li>
          <li>Games</li>
          <li>Mysterys</li>
        </ul>
      </div>
    );
  }
}

class SidebarElement extends Component{
  render() {
    return (
      <li>
        <image></image>
        {this.props.name}
      </li>
    )
  }
}

export default Sidebar;