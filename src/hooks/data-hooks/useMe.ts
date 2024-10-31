import auth from '@react-native-firebase/auth';
import {User} from '../../types/global.interfaces.ts';

export const useMe = () => {
  return auth().currentUser as User | null;
};
