import {Button, StatusBar, View} from 'react-native';
import * as React from 'react';
import Animated from 'react-native-reanimated';
import {useSignOut} from '../hooks/auth-hooks/useSignOut.ts';
import {useMe} from '../hooks/data-hooks/useMe.ts';

export function HomeScreen() {
  const {signOut} = useSignOut();
  const me = useMe();
  console.log(me);

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
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Animated.Text
        className="text-gray-700 text-5xl font-Kaka"
        // style={[style]}
      >
        {me?.email || 'Hello'}
      </Animated.Text>

      <Button onPress={handleSignOut} title="Sign Out" />
      {/*<Button onPress={onPressIn} title={'Fade in'} />*/}
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
    </View>
  );
}
