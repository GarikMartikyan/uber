import React, {useEffect} from 'react';

import BootSplash from 'react-native-bootsplash';
import {MainNavigation} from './navigation/MainNavigation.tsx';

export function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: false});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return <MainNavigation />;
}
