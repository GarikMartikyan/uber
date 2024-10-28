import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {onboardingData} from '../../constants/content/onboardingData.ts';
import {CustomButton} from '../../components/CustomButton.tsx';
import {routes} from '../../constants/routes.ts';

const {width} = Dimensions.get('window');

export function OnboardingScreen({navigation}) {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = event => {
    const scrollX = event.nativeEvent.contentOffset.x;
    setSlideIndex(Math.round(scrollX / width));
  };

  const handleSkipPress = () => {
    navigation.replace(routes.signIn);
  };
  const handleNextPress = () => {
    if (slideIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({index: slideIndex + 1});
    } else {
      navigation.replace(routes.signIn);
    }
  };

  return (
    <View className="flex-1">
      <TouchableOpacity
        onPress={handleSkipPress}
        className="w-full flex justify-end items-end p-5">
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        keyExtractor={item => item.id}
        data={onboardingData}
        renderItem={({item}) => (
          <View
            style={{width}}
            key={item.id}
            className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        )}
      />

      <View className="w-full flex-row items-center justify-center">
        {onboardingData.map((_, index) => (
          <View
            key={index}
            className={`w-[32px] h-[4px] mx-1 ${
              index === slideIndex ? 'bg-[#0286FF]' : 'bg-[#E2E8F0]'
            } rounded-full `}
          />
        ))}
      </View>
      <CustomButton
        onPress={handleNextPress}
        title={
          slideIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'
        }
        className="w-11/12 mt-10 mx-5 mb-20"
      />
    </View>
  );
}
