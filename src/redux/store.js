import { configureStore } from '@reduxjs/toolkit';
import emartReducer from './emartSlice';

export const store = configureStore({
  reducer: {
    emart : emartReducer,
  },
})