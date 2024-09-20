import { configureStore } from '@reduxjs/toolkit';
import qlikReducer from './qlikSlice';

export const store = configureStore({
  reducer: {
    qlik: qlikReducer,
  },
});
