import {Routes} from '../types/navigation.interface.ts';
import {icons} from '../constants/content/icons.ts';
import {Image, View} from 'react-native';
import * as React from 'react';

export const BottomTabIcon = ({
  routName,
  focused,
}: {
  routName: string;
  focused: boolean;
}) => {
  let source;
  switch (routName) {
    case Routes.RIDES:
      source = icons.list;
      break;
    default:
      source = icons[routName];
  }

  return (
    <View
      className={`flex flex-row justify-center items-center rounded-full ${
        focused ? 'bg-general-300' : ''
      }`}>
      <View
        className={`rounded-full w-12 h-12 items-center justify-center ${
          focused ? 'bg-general-400' : ''
        }`}>
        <Image
          source={source}
          tintColor="white"
          resizeMode="contain"
          className="w-7 h-7"
        />
      </View>
    </View>
  );
};
