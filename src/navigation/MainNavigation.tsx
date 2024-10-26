import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from './TabNavigator.tsx';
import {Onboard} from '../screens/onboard/Onboard.tsx';

const Stack = createStackNavigator();

export function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Onboard} />
      <Stack.Screen name="Notifications" component={TabNavigator} />
    </Stack.Navigator>
  );
}
