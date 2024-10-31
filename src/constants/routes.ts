export const routes = {
  onboarding: 'Onboarding',
  home: 'Home',
  bottomTabs: 'BottomTabs',
  settings: 'Settings',
  signUp: 'SignUp',
  signIn: 'SignIn',
} as const;

export type Routes = (typeof routes)[keyof typeof routes];
