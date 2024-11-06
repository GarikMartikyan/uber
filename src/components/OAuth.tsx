import React from 'react';
import {Image, Text, View} from 'react-native';
import {CustomButton} from './CustomButton.tsx';
import {icons} from '../constants/content/icons.ts';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '460124397547-gv44tmah2e1oskjhsujoqb7jr5lmet7b.apps.googleusercontent.com',
});

export const OAuth = () => {
  const handleGoogleSignIn = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices();
      // Get the users ID token

      const signInResult: any = await GoogleSignin.signIn();
      if (isSuccessResponse(signInResult)) {
        console.log({userInfo: signInResult.data});
      } else {
        console.log('sign in was cancelled by user');
        // sign in was cancelled by user
      }

      // Try the new style of google-sign in result, from v13+ of that module
      let idToken = signInResult.data?.idToken;
      if (!idToken) {
        // if you are using older versions of google-signin, try old style result
        idToken = signInResult.idToken;
      }
      if (!idToken) {
        throw new Error('No ID token found');
      }

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('GoogleCredential', googleCredential);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
      console.log('ANCAV');
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('operation (eg. sign in) already in progress');
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log(
              'Android only, play services not available or outdated',
            );
            // Android only, play services not available or outdated
            break;
          default:
            console.log('some other error happened', error);
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
        console.log("an error that's not related to google sign in occurred");
      }
    }
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};
