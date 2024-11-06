import {Button} from 'react-native';
import React from 'react';
import {useSignOut} from '../../hooks/auth-hooks/useSignOut.ts';
import {SafeAreaView} from 'react-native-safe-area-context';

export function ProfileScreen() {
  const signOut = useSignOut();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Button title="Sign Out" onPress={signOut} />
    </SafeAreaView>
  );
}
