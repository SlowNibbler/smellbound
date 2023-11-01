import { configureStore } from '@reduxjs/toolkit';

import questReducer from './QuestSlice'; 

const store = configureStore({
  reducer: {
    quest: questReducer, 
  },
});


export default store;
