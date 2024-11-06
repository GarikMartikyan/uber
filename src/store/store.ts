import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer.ts';
import {api} from '../apis/api.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
