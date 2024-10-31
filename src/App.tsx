import React, {useEffect} from 'react';

import BootSplash from 'react-native-bootsplash';
import {MainNavigation} from './navigation/MainNavigation.tsx';
import {useAuthStateListener} from './hooks/auth-hooks/useAuthStateListener.ts';

export function App() {
  const {initializing} = useAuthStateListener();
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      if (!initializing) {
        await BootSplash.hide({fade: true});
        console.log('BootSplash has been hidden successfully');
      }
    });
  }, [initializing]);

  return <MainNavigation />;
}
