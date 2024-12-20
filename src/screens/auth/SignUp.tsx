// import {useSignUp} from '@clerk/clerk-expo';
// import {Link, router} from 'expo-router';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
// import {ReactNativeModal} from 'react-native-modal';
//
import {CustomButton} from '../../components/CustomButton';
import {images} from '../../constants/content/images.ts';
import {icons} from '../../constants/content/icons.ts';
import {InputField} from '../../components/InputField.tsx';
import {OAuth} from '../../components/OAuth.tsx';
import {useSignUp} from '../../hooks/auth-hooks/useSignUp.ts';
import {Routes} from '../../types/navigation.interface.ts';
import {AppLink} from '../../components/AppLink.tsx';
import {useAppNavigation} from '../../hooks/navigation-hooks/useAppNavigation.ts';

// import OAuth from '@/components/OAuth';

// import {fetchAPI} from '@/lib/fetch';

const SignUp = () => {
  const {signUp, isLoading} = useSignUp();
  const navigation = useAppNavigation();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    return navigation.addListener('blur', () => {
      setForm({
        name: '',
        email: '',
        password: '',
      });
    });
  }, [navigation]);

  const onSignUpPress = async () => {
    await signUp(form.email, form.password);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            placeholderTextColor="gray"
            icon={icons.person}
            value={form.name}
            onChangeText={value => setForm({...form, name: value})}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            placeholderTextColor="gray"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={value => setForm({...form, email: value})}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            placeholderTextColor="gray"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={value => setForm({...form, password: value})}
          />
          <CustomButton
            disabled={isLoading}
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />
          <OAuth />
          <AppLink
            to={Routes.SIGN_IN}
            className="text-lg text-center text-general-200 mt-10">
            Already have an account?{' '}
            <Text className="text-primary-500">Log In</Text>
          </AppLink>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
