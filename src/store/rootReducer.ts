import {combineReducers} from '@reduxjs/toolkit';
import alertModalReducer from './slices/alertModalSlice.ts';
import {api} from '../apis/api.ts';

export const rootReducer = combineReducers({
  alertModal: alertModalReducer,
  [api.reducerPath]: api.reducer,
});
