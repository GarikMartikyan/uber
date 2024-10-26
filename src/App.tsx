import React, {useEffect} from 'react';
import {TabNavigator} from './navigation/TabNavigator.tsx';

import BootSplash from 'react-native-bootsplash';

export function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return <TabNavigator />;
}
