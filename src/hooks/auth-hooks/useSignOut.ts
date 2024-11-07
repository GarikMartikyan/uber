import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const useSignOut = () => {
  return () => {
    console.log('signing out call');
    GoogleSignin.signOut().finally(() => {
      auth().signOut();
    });
  };
};
