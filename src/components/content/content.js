import { Component } from "react";
import './content.css'
import {
  Routes,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ArtContainer from './routes/Art/artPage'
import Home from './routes/Home/homePage'

import Sidebar from '../sidebar/sidebar'

class Content extends Component{
  render() {
    return (
      <div className="content">
        <HashRouter>
        <Sidebar/>
          <Routes>
            <Route className="homePath" exact path="/" component={Home}/>
            <Route path="/ArtContainer" component={ArtContainer}/>
          </Routes>
        </HashRouter>      
      </div>
    );
  }
}



export default Content;