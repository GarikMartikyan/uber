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

        navigation.reset({
          index: 0,
          routes: [{name: Routes.BOTTOM_TABS, params: {screen: Routes.HOME}}],
        });
      } else {
        console.log('THERE IS NO USER /OR/ USER IS LOGGED OUT');
        navigation.reset({
          index: 0,
          routes: [{name: Routes.SIGN_IN}],
        });
      }
    };
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);

    return () => {
      unsubscribe();
    };
  }, []);
  return {initializing};
}
