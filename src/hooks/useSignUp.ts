import auth from '@react-native-firebase/auth';
import {useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../constants/routes.ts';

export function useSignUp() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const signUp = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setIsSuccess(false);

      await auth().createUserWithEmailAndPassword(email, password);

      setIsSuccess(true);
      navigation.navigate(routes.bottomTabs);
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
