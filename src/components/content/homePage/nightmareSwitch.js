import React, { useState } from 'react';

function NightmareSwitch() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const handleToggle = () => {
    setIsSoundEnabled((prevIsSoundEnabled) => !prevIsSoundEnabled);
    const eventName = isSoundEnabled ? 'disableSounds' : 'enableSounds';
    window.dispatchEvent(new Event(eventName));
  };

  return (
    <div>
      <label>
        Enable Nightmare
        <input type="checkbox" checked={isSoundEnabled} onChange={handleToggle} />
      </label>
    </div>
  );
};

export default NightmareSwitch;