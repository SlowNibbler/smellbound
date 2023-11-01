import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTalkedToPongo, toggleNightmare, selectNightmareEnabled } from '../Quests/QuestSlice';

const NightmareSwitch = () => {
  const dispatch = useDispatch();
  const nightmareEnabled = useSelector(selectNightmareEnabled);

  const handleToggle = () => {
    dispatch(toggleNightmare());
    dispatch(setTalkedToPongo());
  };

  useEffect(() => {
    localStorage.setItem('nightmareEnabled', JSON.stringify(nightmareEnabled));
    
  }, [nightmareEnabled]);

  return (
    <div>
      <label>
        Enable Boogie
        <input
          type="checkbox"
          checked={nightmareEnabled}
          onChange={handleToggle}
        />
      </label>
    </div>
  );
};

export default NightmareSwitch;