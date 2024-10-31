import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {routes} from './routes.ts';

export type RootNavigationStackParamList = {
  [routes.ONBOARDING]: undefined;
  [routes.SIGN_IN]: undefined;
  [routes.SIGN_UP]: undefined;
  [routes.BOTTOM_TABS]: undefined;
};

// Type for navigation prop

export type SignInScreenNavigationProp = StackNavigationProp<
  RootNavigationStackParamList,
  routes.SIGN_IN
>;

// Type for route prop
export type HomeScreenRouteProp = RouteProp<
  RootNavigationStackParamList,
  routes.HOME
>;
export type SignInScreenRouteProp = RouteProp<
  RootNavigationStackParamList,
  routes.SIGN_IN
>;
