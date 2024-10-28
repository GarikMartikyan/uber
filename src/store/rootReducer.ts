import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './slices/user';

export const rootReducer = combineReducers({
  user: userReducer,
});
