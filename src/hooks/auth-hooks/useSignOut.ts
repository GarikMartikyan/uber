import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const useSignOut = () => {
  return async () => {
    await GoogleSignin.signOut();
    await auth().signOut();
  };
};
