import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {useAppNavigation} from '../hooks/navigation-hooks/useAppNavigation.ts';

export const AppLink = ({to, children, className}: any) => {
  const navigation = useAppNavigation();

  const handlePress = () => {
    navigation.navigate(to);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Text className={` ${className}`}>{children}</Text>
    </TouchableWithoutFeedback>
  );
};
