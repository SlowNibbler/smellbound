import { createSlice } from '@reduxjs/toolkit';

import defImg from '../../../images/homeImages/wall1.png'

const questSlice = createSlice({
  name: 'quest',
  initialState: {
    questEvents: ['daytime', 'sunet', 'dusk', 'nightmare'],
    eventCounter: 0,
    hasTalkedToPongo: false,
    nightmareEnabled: false,
    caveEnabled: true,
    boogieEnabled: false,
    selectedImage: defImg,
  },
  reducers: {
    incrementEventCounter: (state) => {
      state.eventCounter += 1;
      console.log('progress')
    },
    setTalkedToPongo: (state) => {
      state.hasTalkedToPongo = true;
      console.log('talked to pongo!');
    },
    toggleNightmare: (state) => {
      state.nightmareEnabled = !state.nightmareEnabled;
    },
    toggleBoogie: (state) => {
      state.boogieEnabled = !state.boogieEnabled;
    },
    toggleCave: (state) => {
      state.caveEnabled = !state.caveEnabled;
      console.log('cavetoggel')
    },
    setTheme: (state, action) => {
      state.selectedImage = action.payload;
    }
  },
});


export const { incrementEventCounter, setTalkedToPongo, toggleNightmare, setTheme, toggleBoogie, toggleCave } = questSlice.actions;
export const selectQuest = (state) => state.quest;
export const selectNightmareEnabled = (state) => state.quest.nightmareEnabled;
export const selectBoogieEnabled = (state) => state.quest.boogieEnabled;
export const selectCaveEnabled = (state) => state.quest.caveEnabled;

export default questSlice.reducer;
