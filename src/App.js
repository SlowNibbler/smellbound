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
import { Sidebar, SidebarButton } from './components/sidebar/sidebar';

import NightmareStore from './components/state/NightmareStore';

import VideoSpawner from './components/utility/VideoSpawner';
import { Provider, useSelector } from 'react-redux'


import React, { createContext, useState }  from 'react';

import { connect } from 'react-redux';
import { selectNightmareEnabled } from './components/state/NightmareSlice';

function App() {
  return (
    <Provider store={NightmareStore}>
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
    </Provider>
  );
}



function Layout() {
  const nightmareEnabled = useSelector(state => state.nightmareEnabled)

  return (
    <div className='Layout' >
      <SidebarButton />
      <Sidebar/>
      <ContentWrapper />
      <VideoSpawner videoSrc="/videos/keepSpinning.webm" nightmareEnabled={nightmareEnabled} />
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
