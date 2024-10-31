import {Button, StatusBar, View} from 'react-native';
import * as React from 'react';
import Animated from 'react-native-reanimated';
import {useAppSelector} from '../hooks/rtk-hooks/useAppSelector.ts';
import {useSignOut} from '../hooks/auth-hooks/useSignOut.ts';
import {routes} from '../constants/routes.ts';
import {useAppNavigation} from '../hooks/navigation-hooks/useAppNavigation.ts';

export function HomeScreen() {
  const user = useAppSelector(state => state.user);
  const navigation = useAppNavigation();
  const {signOut} = useSignOut();
  console.log(user);

  // const progress = useSharedValue(1);
  //
  // const style = useAnimatedStyle(() => ({
  //   opacity: withTiming(progress.value, {duration: 1000}),
  // }));
  // const onPress = () => {
  //   progress.value = 0;
  // };
  // const onPressIn = () => {
  //   progress.value = 1;
  // };

  const handleSignOut = async () => {
    await signOut();
    navigation.navigate(routes.signIn);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Animated.Text
        className="text-gray-700 text-5xl font-Kaka"
        // style={[style]}
      >
        {user?.email || 'Hello'}
      </Animated.Text>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <Button onPress={handleSignOut} title="Sign Out" />
      {/*<Button onPress={onPressIn} title={'Fade in'} />*/}
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
    </View>
  );
}
