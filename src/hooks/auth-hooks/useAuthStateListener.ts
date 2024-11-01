import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAppNavigation} from '../navigation-hooks/useAppNavigation.ts';
import {Routes} from '../../types/navigation.interface.ts';

export function useAuthStateListener() {
  const [initializing, setInitializing] = useState(true);
  const navigation = useAppNavigation();

  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      setInitializing(false);
      if (user) {
        console.log('USER INITIALIZED');

        navigation.navigate(Routes.BOTTOM_TABS, {screen: Routes.HOME});
      } else {
        console.log('THERE IS NO USER OR USER IS LOGGED OUT');
        navigation.navigate(Routes.SIGN_IN);
      }
    };
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);

    return () => {
      unsubscribe();
    };
  }, []);
  return {initializing};
}
