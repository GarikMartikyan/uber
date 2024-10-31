import React, {useCallback, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {images} from '../../constants/content/images.ts';
import {InputField} from '../../components/InputField.tsx';
import {icons} from '../../constants/content/icons.ts';
import {CustomButton} from '../../components/CustomButton.tsx';
import {OAuth} from '../../components/OAuth.tsx';
import {Link} from '@react-navigation/native';
import {routes} from '../../constants/routes.ts';
import {useSignIn} from '../../hooks/auth-hooks/useSignIn.ts';
import {useAppNavigation} from '../../hooks/navigation-hooks/useAppNavigation.ts';

export const SignIn = () => {
  const {signIn, isLoading, isSuccess} = useSignIn();
  const navigation = useAppNavigation();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = useCallback(() => {
    signIn(form.email, form.password).then(a => console.log('CREDENTIALS', a));
    // navigation.navigate(routes.bottomTabs);
    //   if (!isLoaded) return;
    //
    //   try {
    //     const signInAttempt = await signIn.create({
    //       identifier: form.email,
    //       password: form.password,
    //     });
    //
    //     if (signInAttempt.status === 'complete') {
    //       await setActive({session: signInAttempt.createdSessionId});
    //       router.replace('/(root)/(tabs)/home');
    //     } else {
    //       // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
    //       console.log(JSON.stringify(signInAttempt, null, 2));
    //       Alert.alert('Error', 'Log in failed. Please try again.');
    //     }
    //   } catch (err: any) {
    //     console.log(JSON.stringify(err, null, 2));
    //     Alert.alert('Error', err.errors[0].longMessage);
    //   }
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
            disabled={true}
            title="Sign In"
            onPress={onSignInPress}
            className="mt-6"
          />

          <OAuth />

          <Link
            to={{screen: routes.signUp}}
            className="text-lg text-center text-general-200 mt-10">
            Don't have an account?{' '}
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};