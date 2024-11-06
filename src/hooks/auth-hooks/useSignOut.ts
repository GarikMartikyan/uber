import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const useSignOut = () => {
  const signOut = async () => {
    await auth().signOut();
    await GoogleSignin.signOut();
  };
  return {signOut};
};
