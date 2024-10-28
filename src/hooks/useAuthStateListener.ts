import {useAppDispatch} from './useAppDispatch.ts';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

export function useAuthStateListener() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      console.log('This is user inside useAuthStateListener', user);
      if (user) {
        // dispatch(setUser(user));
      } else {
        // dispatch(clearUser());
      }
    };
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, []);
}
