import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTalkedToPongo, toggleBoogie, selectBoogieEnabled } from '../Quests/QuestSlice';
import '../../content/homePage/homePage.css'

const BoogieSwitch = () => {
  const dispatch = useDispatch();
  const boogieEnabled = useSelector(selectBoogieEnabled);

  const handleToggle = () => {
    dispatch(toggleBoogie());
    dispatch(setTalkedToPongo());
  };

  useEffect(() => {
    localStorage.setItem('boogieEnabled', JSON.stringify(boogieEnabled));
    
  }, [boogieEnabled]);

  return (
    <div className='BoogieSwitch'>
      <input
          type="checkbox"
          checked={boogieEnabled}
          onChange={handleToggle}
        />
      <label>
        Enable Boogie
      </label>
    </div>
  );
};

export default BoogieSwitch;