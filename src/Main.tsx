import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {App} from './App.tsx';
import './global.css';
import './platform-features/react-native-gesture-handler/gesture-handler';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';

export function Main() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  );
}
