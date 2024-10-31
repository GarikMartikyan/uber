import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './TabNavigator.tsx';
import {OnboardingScreen} from '../screens/onboard/OnboardingScreen.tsx';
import {routes} from '../types/routes.ts';
import {SignIn} from '../screens/auth/SignIn.tsx';
import SignUp from '../screens/auth/SignUp.tsx';
import {RootNavigationStackParamList} from '../types/navigation.interface.ts';

const RootStack = createStackNavigator<RootNavigationStackParamList>();

export function RootNavigation() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={routes.ONBOARDING} component={OnboardingScreen} />
      <RootStack.Screen name={routes.SIGN_IN} component={SignIn} />
      <RootStack.Screen name={routes.SIGN_UP} component={SignUp} />
      <RootStack.Screen name={routes.BOTTOM_TABS} component={TabNavigator} />
    </RootStack.Navigator>
  );
}
