import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../rtk-hooks/useAppDispatch.ts';
import {clearUser} from '../../store/slices/userSlice.ts';
import {useAppNavigation} from '../navigation-hooks/useAppNavigation.ts';
import {Routes} from '../../types/navigation.interface.ts';

export function useAuthStateListener() {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      setInitializing(false);
      if (user) {
        console.log('USER INITIALIZED');

        navigation.navigate(Routes.BOTTOM_TABS, {screen: Routes.HOME});
      } else {
        console.log('USER LOG OUT');
        navigation.navigate(Routes.SIGN_IN);
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
