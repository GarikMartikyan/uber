import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from '../screens/Settings.tsx';
import {HomeScreen} from '../screens/Home.tsx';
import {BottomTabsParamList, Routes} from '../types/navigation.interface.ts';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
