import { createSlice } from '@reduxjs/toolkit'


const nightmareSlice = createSlice({
  name: 'nightmare',
  initialState: {
    nightmareEnabled: false
  },
  reducers: {
    toggleNightmare: (state) => {
        state.nightmareEnabled = !state.nightmareEnabled;
    },
  },
});
export const { toggleNightmare } = nightmareSlice.actions;
export const selectNightmareEnabled = (state) => state.nightmare.nightmareEnabled;

export default nightmareSlice.reducer;