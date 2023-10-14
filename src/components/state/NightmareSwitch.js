import React, { useState, useContext } from 'react';
import { Provider, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleNightmare, selectNightmareEnabled } from './NightmareSlice';


function NightmareSwitch() {

  const nightmareEnabled = useSelector(state => state.nightmareEnabled)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleNightmare());
  };


  return (
    <div>
      <label>
        Enable Nightmare
        <input type="checkbox" checked={nightmareEnabled} onChange={handleToggle}
 />
      </label>
    </div>
  );
};

export default NightmareSwitch;