import { configureStore } from '@reduxjs/toolkit';
import contsctsReducers from './contsctsReducers';
import filterReducer from './filterReducer';

export const store = configureStore({
  reducer: {
    contacts: contsctsReducers,
    filter: filterReducer,
  },
});

