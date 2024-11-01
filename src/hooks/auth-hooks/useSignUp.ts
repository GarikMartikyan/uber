import auth from '@react-native-firebase/auth';
import {useCallback, useState} from 'react';
import {useAppDispatch} from '../rtk-hooks/useAppDispatch.ts';
import {setAlertData} from '../../store/slices/alertModalSlice.ts';

export function useSignUp() {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);
  const dispatch = useAppDispatch();

  const signUp = useCallback(async (email: string, password: string) => {
    if (!email || !password) {
      dispatch(
        setAlertData({
          visible: true,
          type: 'warning',
          title: 'Error',
          description: 'Please fill in all fields.',
        }),
      );
      return;
    }

    try {
      setIsLoading(true);

      await auth().createUserWithEmailAndPassword(email, password);

      setIsSuccess(true);
    } catch (error: any) {
      setIsSuccess(false);
      if (error?.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        dispatch(
          setAlertData({
            visible: true,
            type: 'error',
            title: 'Error',
            description: 'That email address is already in use!',
          }),
        );
      } else if (error?.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        dispatch(
          setAlertData({
            visible: true,
            type: 'error',
            title: 'Error',
            description: 'That email address is invalid!',
          }),
        );
      } else {
        console.error(error);
        dispatch(
          setAlertData({
            visible: true,
            type: 'error',
            title: 'Error',
            description: 'Something went wrong. Please try again.',
          }),
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUpWithGoogle = async () => {};

  return {signUp, isLoading, isSuccess, signUpWithGoogle};
}
