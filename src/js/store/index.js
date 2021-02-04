import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import showPhotobox from './showPhotobox';

const reducer = combineReducers({
  showPhotobox
});
const store = configureStore({
  reducer
});
export default store;
