import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './TabNavigator.tsx';
import {OnboardingScreen} from '../screens/onboard/OnboardingScreen.tsx';
import {routes} from '../constants/routes.ts';
import {SignIn} from '../screens/auth/SignIn.tsx';
import SignUp from '../screens/auth/SignUp.tsx';

const Stack = createStackNavigator();

export function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.onboarding} component={OnboardingScreen} />
      <Stack.Screen name={routes.signIn} component={SignIn} />
      <Stack.Screen name={routes.signUp} component={SignUp} />
      <Stack.Screen name={routes.bottomTabs} component={TabNavigator} />
    </Stack.Navigator>
  );
}
