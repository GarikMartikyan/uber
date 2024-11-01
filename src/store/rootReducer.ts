import {combineReducers} from '@reduxjs/toolkit';
import alertModalReducer from './slices/alertModalSlice.ts';

export const rootReducer = combineReducers({
  alertModal: alertModalReducer,
});
