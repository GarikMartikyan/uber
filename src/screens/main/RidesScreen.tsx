import React from 'react';
import {Map} from '../../components/Map.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';

export function RidesScreen() {
  return (
    <SafeAreaView className="flex flex-1">
      <Map />
    </SafeAreaView>
  );
}
