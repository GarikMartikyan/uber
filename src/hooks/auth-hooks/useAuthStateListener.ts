import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../rtk-hooks/useAppDispatch.ts';
import {clearUser, setUser} from '../../store/slices/userSlice.ts';

export function useAuthStateListener() {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      console.log('onAuthStateChanged', user);
      setInitializing(false);
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          }),
        );
      } else {
        dispatch(clearUser());
      }
    };
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);

    return () => {
      dispatch(clearUser());
      unsubscribe();
    };
  }, []);
  return {initializing};
}
