import { Component } from "react";
import ModelViewer from './modelViewer';
import './homePage.css';


class HomePage extends Component{
  render() {
    return (
      <div className="home">
           <span className="homeTitle">Welcome to my website!</span>
           <ModelViewer />
      </div>
    );
  }
}



export default HomePage;