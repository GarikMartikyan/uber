import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {App} from './App.tsx';
import './global.css';
import './platform-features/react-native-gesture-handler/gesture-handler';

export function Main() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
