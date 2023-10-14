import { configureStore } from '@reduxjs/toolkit'

import nightmareReducer from './NightmareSlice'

const nightmareStore = configureStore({
  reducer: {
    nightmare: nightmareReducer,
  },
});

export default nightmareStore;