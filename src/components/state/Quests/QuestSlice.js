import { createSlice } from '@reduxjs/toolkit';


const questSlice = createSlice({
  name: 'quest',
  initialState: {
    questEvents: ['daytime', 'sunet', 'dusk', 'nightmare'],
    eventCounter: 0,
    hasTalkedToPongo: false,
    nightmareEnabled: false,
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
  },
});


export const { incrementEventCounter, setTalkedToPongo, toggleNightmare } = questSlice.actions;
export const selectQuest = (state) => state.quest;
export const selectNightmareEnabled = (state) => state.quest.nightmareEnabled;
export default questSlice.reducer;
