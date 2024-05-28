import './App.css';
import { Provider, useSelector } from 'react-redux'
import React from 'react';
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import HomePage  from './components/content/homePage/homePage';
import ArtContainer from './components/content/artPage/artPage';
import GamesContainer from './components/content/gamesPage/gamesPage';
import MysterysContainer from './components/content/mysterysPage/mysterysPage';
import CodeContainer from './components/content/codePage/codePage';
import { Sidebar } from './components/sidebar/sidebar';
import { MobileSidebar, SidebarButton } from './components/sidebar/MobileSidebar';
import QuestStore from './components/state/Quests/QuestStore';
import VideoSpawner from './components/utility/VideoSpawner';
import CaveSounds from './components/utility/caveSounds';




function App() {

  return (
    <Provider store={QuestStore}>
      <Appo/>
    </Provider>
  );
}

function Appo() {
  const selectedImage = useSelector((state) => state.quest.selectedImage);
  return (
      <div className='App' id='App' style={{ backgroundImage: `url(${selectedImage})` }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="art" element={<ArtContainer />} />
            <Route path="games" element={<GamesContainer />} />
            <Route path="code" element={<CodeContainer />} />
            <Route path="mystery" element={<MysterysContainer />} />
          </Route>
        </Routes>
      </div>
  );
}


function Layout() {
  const nightmareEnabled = useSelector(state => state.quest.nightmareEnabled)
  const caveEnabled = useSelector(state => state.quest.caveEnabled)

  return (
    <div className='OuterLayout' >
      <SidebarButton />
      <div className='Layout'>
        <Sidebar/>
        <ContentWrapper />
        <VideoSpawner videoSrc="/videos/keepSpinning.webm" nightmareEnabled={nightmareEnabled} />
        <CaveSounds nightmareEnabled={nightmareEnabled} caveEnabled={caveEnabled}/>
      </div>
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
