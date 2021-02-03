import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import photobox from './photobox';

const reducer = combineReducers({
  photobox
});
const store = configureStore({
  reducer
});
export default store;
