import './App.css';
import Content from './components/content/content'
import HomePage  from './components/content/homePage/homePage';
import ArtContainer from './components/content/artPage/artPage';
import {
  Routes,
  Route,
  NavLink,
  HashRouter,
  Link,
  Outlet
} from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<ArtContainer />} />
          <Route path="*" element={<ArtContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Sidebar/>
      


      <Outlet />
    </div>
  );
}



export default App;
