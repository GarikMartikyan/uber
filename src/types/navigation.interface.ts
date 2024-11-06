import {NavigatorScreenParams} from '@react-navigation/native';

export enum Routes {
  HOME = 'home',
  SETTINGS = 'settings',
  ONBOARDING = 'onboarding',
  SIGN_IN = 'login',
  SIGN_UP = 'register',
  BOTTOM_TABS = 'bottom-tabs',
  RIDES = 'rides',
  PROFILE = 'profile',
  CHAT = 'chat',
}

export type BottomTabsParamList = {
  [Routes.HOME]: undefined;
  [Routes.CHAT]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.RIDES]: undefined;
};

export type RootNavigationStackParamList = {
  [Routes.ONBOARDING]: undefined;
  [Routes.SIGN_IN]: undefined;
  [Routes.SIGN_UP]: undefined;
  [Routes.BOTTOM_TABS]: NavigatorScreenParams<BottomTabsParamList>;
};
