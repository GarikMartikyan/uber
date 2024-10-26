import {Button, StatusBar} from 'react-native';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export function HomeScreen() {
  const progress = useSharedValue(1);

  const style = useAnimatedStyle(() => ({
    opacity: withTiming(progress.value, {duration: 1000}),
  }));
  const onPress = () => {
    progress.value = 0;
  };
  const onPressIn = () => {
    progress.value = 1;
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Animated.Text className="text-red-600 text-5xl" style={[style]}>
        Uber Clone
      </Animated.Text>
      <Button onPress={onPress} title={'Fade Out'} />
      <Button onPress={onPressIn} title={'Fade in'} />
      <StatusBar backgroundColor={'#fff'} />
    </SafeAreaView>
  );
}
