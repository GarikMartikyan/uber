import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {App} from './App.tsx';
import './global.css';

export function Main() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
