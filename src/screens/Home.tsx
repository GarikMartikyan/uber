import {StatusBar, Text} from 'react-native';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600 text-5xl">Uber Clone</Text>
      <StatusBar backgroundColor={'#fff'} />
    </SafeAreaView>
  );
}
