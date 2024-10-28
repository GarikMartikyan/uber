import {combineReducers} from '@reduxjs/toolkit';
import myReducer from './slices/mySlice';

export const rootReducer = combineReducers({
  myReducer,
});
