import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from '../screens/Settings.tsx';
import {HomeScreen} from '../screens/Home.tsx';
import {routes} from '../types/routes.ts';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={routes.HOME} component={HomeScreen} />
      <Tab.Screen name={routes.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
