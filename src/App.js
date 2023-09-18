import './App.css';
import HomePage  from './components/content/homePage/homePage';
import ArtContainer from './components/content/artPage/artPage';
import GamesContainer from './components/content/gamesPage/gamesPage';
import MysterysContainer from './components/content/mysterysPage/mysterysPage';
import CodeContainer from './components/content/codePage/codePage';
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import XiNice from './images/xiNice.jpg'



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="art" element={<ArtContainer />} />
          <Route path="games" element={<GamesContainer />} />
          <Route path="code" element={<CodeContainer />} />
          <Route path="mysterys" element={<MysterysContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className='Layout' >
      <Sidebar/>
      <ContentWrapper />
    
    </div>
  );
}

// component that is a wrapper around the Outlet component
function ContentWrapper() {
  return (
    <div className='ContentWrapper'>
      <Outlet />
    </div>
  );
}



export default App;
