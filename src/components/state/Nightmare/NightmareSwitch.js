import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTalkedToPongo, toggleNightmare, selectNightmareEnabled } from '../Quests/QuestSlice';
import '../../content/mysterysPage/mysterysPage.css'

const NightmareSwitch = () => {
  const dispatch = useDispatch();
  const nightmareEnabled = useSelector(selectNightmareEnabled);

  const handleToggle = () => {
    const shouldConfirm = window.confirm("Are you sure? Really? Do you trust this website?");

    if (shouldConfirm) {
      dispatch(toggleNightmare());
      dispatch(setTalkedToPongo());    }


  };
  

  useEffect(() => {
    localStorage.setItem('nightmareEnabled', JSON.stringify(nightmareEnabled));
    
  }, [nightmareEnabled]);

  if (!nightmareEnabled) {
    return (
      <div className='NightmareSwitch'>
        <button onClick={handleToggle}>
        Enable Website
        </button>
      </div>
    );
  }
  
};

export default NightmareSwitch;