import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/main/HomeScreen.tsx';
import {BottomTabsParamList, Routes} from '../types/navigation.interface.ts';
import {RidesScreen} from '../screens/main/RidesScreen.tsx';
import {ChatScreen} from '../screens/main/ChatScreen.tsx';
import {ProfileScreen} from '../screens/main/ProfileScreen.tsx';
import {BottomTabIcon} from '../components/BottomTabIcon.tsx';

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#333333',
          borderRadius: 50,
          paddingBottom: 0, // ios only
          overflow: 'hidden',
          marginHorizontal: 20,
          marginBottom: 20,
          height: 78,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
        },
        tabBarIcon: ({focused}) => (
          <BottomTabIcon routName={route.name} focused={focused} />
        ),
      })}>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.RIDES} component={RidesScreen} />
      <Tab.Screen name={Routes.CHAT} component={ChatScreen} />
      <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
