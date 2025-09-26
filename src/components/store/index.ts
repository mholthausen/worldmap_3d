import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import showPhotobox from './showPhotobox.ts';

const reducer = combineReducers({
  showPhotobox
});

const store = configureStore({
  reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
