import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootNavigationStackParamList} from '../../types/navigation.interface.ts';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootNavigationStackParamList>>();
};
