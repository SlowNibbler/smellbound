import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNightmare, selectNightmareEnabled } from './NightmareSlice';

const NightmareSwitch = () => {
  const dispatch = useDispatch();
  const nightmareEnabled = useSelector(selectNightmareEnabled);

  const handleToggle = () => {
    dispatch(toggleNightmare());
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