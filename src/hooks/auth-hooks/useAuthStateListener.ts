import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../rtk-hooks/useAppDispatch.ts';
import {clearUser, setUser} from '../../store/slices/userSlice.ts';
import {routes} from '../../types/routes.ts';
import {useNavigation} from '@react-navigation/native';

export function useAuthStateListener() {
  const [initializing, setInitializing] = useState(true);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const onAuthStateChanged = (user: any) => {
      setInitializing(false);
      if (user) {
        console.log('onAuthStateChanged', user);
        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          }),
          navigation.navigate(routes.BOTTOM_TABS),
        );
      } else {
        dispatch(clearUser());
        navigation.navigate(routes.SIGN_IN);
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
