import auth from '@react-native-firebase/auth';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';

export function useSignUp() {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

  const signUp = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);

      await auth().createUserWithEmailAndPassword(email, password);

      setIsSuccess(true);
    } catch (error: any) {
      setIsSuccess(false);
      if (error?.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        Alert.alert('Error', 'That email address is already in use!');
      } else if (error?.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        Alert.alert('Error', 'That email address is invalid!');
      } else {
        console.error(error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUpWithGoogle = async () => {};

  return {signUp, isLoading, isSuccess, signUpWithGoogle};
}
