import {useCallback, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../rtk-hooks/useAppDispatch.ts';
import {setAlertData} from '../../store/slices/alertModalSlice.ts';

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);
  const dispatch = useAppDispatch();

  const signIn = useCallback(async (email: string, password: string) => {
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

      await auth().signInWithEmailAndPassword(email, password);

      setIsSuccess(true);
    } catch (error: any) {
      setIsSuccess(false);

      if (error?.code === 'auth/invalid-credential') {
        console.log('Wrong credentials!');
        dispatch(
          setAlertData({
            visible: true,
            type: 'error',
            title: 'Error',
            description: 'Wrong credentials!',
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
            description: error.message,
          }),
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signInWithGoogle = async () => {};
  return {signIn, isLoading, isSuccess, signInWithGoogle};
};
