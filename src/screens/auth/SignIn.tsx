import React, {useCallback, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {images} from '../../constants/content/images.ts';
import {InputField} from '../../components/InputField.tsx';
import {icons} from '../../constants/content/icons.ts';
import {CustomButton} from '../../components/CustomButton.tsx';
import {OAuth} from '../../components/OAuth.tsx';
import {useSignIn} from '../../hooks/auth-hooks/useSignIn.ts';
import {Routes} from '../../types/navigation.interface.ts';
import {AppLink} from '../../components/AppLink.tsx';

export const SignIn = () => {
  const {signIn, isLoading} = useSignIn();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = useCallback(() => {
    signIn(form.email, form.password).then(a => console.log('CREDENTIALS', a));
  }, [isLoading, form]);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={value => setForm({...form, email: value})}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={value => setForm({...form, password: value})}
          />

          <CustomButton
            disabled={isLoading}
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <OAuth />

          <AppLink
            to={Routes.SIGN_UP}
            className="text-lg text-center text-general-200 mt-10">
            Don't have an account?{' '}
            <Text className="text-primary-500">Sign Up</Text>
          </AppLink>
        </View>
      </View>
    </ScrollView>
  );
};
