import React, {useEffect} from 'react';
import {Map} from '../../components/Map.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PERMISSIONS, request} from 'react-native-permissions';
import {Platform} from 'react-native';

export function RidesScreen() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        .then(status => {
          console.log('status: ', status);
        })
        .catch(a => console.log('error: ', a));
    }
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.LOCATION_ALWAYS)
        .then(status => {
          console.log('status IOS: ', status);
        })
        .catch(a => console.log('error IOS: ', a));
    }
  }, []);
  return (
    <SafeAreaView className="flex flex-1">
      <Map />
    </SafeAreaView>
  );
}
