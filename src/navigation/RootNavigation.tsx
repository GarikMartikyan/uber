import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigator} from './BottomTabNavigator.tsx';
import {OnboardingScreen} from '../screens/onboard/OnboardingScreen.tsx';
import {
  RootNavigationStackParamList,
  Routes,
} from '../types/navigation.interface.ts';
import {SignIn} from '../screens/auth/SignIn.tsx';
import SignUp from '../screens/auth/SignUp.tsx';

const RootStack = createStackNavigator<RootNavigationStackParamList>();

export function RootNavigation() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={Routes.ONBOARDING} component={OnboardingScreen} />
      <RootStack.Screen name={Routes.SIGN_IN} component={SignIn} />
      <RootStack.Screen name={Routes.SIGN_UP} component={SignUp} />
      <RootStack.Screen
        name={Routes.BOTTOM_TABS}
        component={BottomTabNavigator}
      />
    </RootStack.Navigator>
  );
}
