import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTalkedToPongo, toggleCave, selectCaveEnabled, selectNightmareEnabled } from '../Quests/QuestSlice';
import '../../content/homePage/homePage.css'

const CaveSwitch = () => {
  const dispatch = useDispatch();
  const caveEnabled = useSelector(selectCaveEnabled);

  const handleToggle = () => {
    dispatch(toggleCave());
  };

  useEffect(() => {
    localStorage.setItem('caveEnabled', JSON.stringify(caveEnabled));
    console.log('dsds' + caveEnabled)

  }, [caveEnabled]);

  const nightmareEnabled = useSelector(selectNightmareEnabled)

  if (nightmareEnabled) {
    return (
        <div className='CaveSwitch'>
          <input
              type="checkbox"
              checked={caveEnabled}
              onChange={handleToggle}
            />
          <label>
            Toggle Cave Sounds
          </label>
        </div>
      );
  }

};

export default CaveSwitch;