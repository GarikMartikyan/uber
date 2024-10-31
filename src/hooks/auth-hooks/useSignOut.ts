import {clearUser} from '../../store/slices/userSlice.ts';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../rtk-hooks/useAppDispatch.ts';

export const useSignOut = () => {
  const dispatch = useAppDispatch();
  const signOut = async () => {
    await auth().signOut();
    dispatch(clearUser());
  };
  return {signOut};
};
