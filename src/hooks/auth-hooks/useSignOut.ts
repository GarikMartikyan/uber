import auth from '@react-native-firebase/auth';

export const useSignOut = () => {
  const signOut = async () => {
    await auth().signOut();
  };
  return {signOut};
};
