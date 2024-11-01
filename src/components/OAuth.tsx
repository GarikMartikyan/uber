import React from 'react';
import {Image, Text, View} from 'react-native';
import {CustomButton} from './CustomButton.tsx';
import {icons} from '../constants/content/icons.ts';

export const OAuth = () => {
  // const {startOAuthFlow} = useOAuth({st           rategy: 'oauth_google'});

  const handleGoogleSignIn = async () => {
    // const result = await googleOAuth(startOAuthFlow);
    //
    // if (result.code === 'session_exists') {
    //   Alert.alert('Success', 'Session exists. Redirecting to home screen.');
    //   navigation.replace(Routes.home);
    // }
    //
    // Alert.alert(result.success ? 'Success' : 'Error', result.message);
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
