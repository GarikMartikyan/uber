import * as React from 'react';
import {useEffect, useState} from 'react';
import {useMe} from '../../hooks/data-hooks/useMe.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RideCard} from '../../components/RideCard.tsx';
import {images} from '../../constants/content/images.ts';
import rides from '../../constants/content/rides.json';
import {icons} from '../../constants/content/icons.ts';
import {useSignOut} from '../../hooks/auth-hooks/useSignOut.ts';
import {Map} from '../../components/Map.tsx';

export function HomeScreen() {
  const me = useMe();
  const [isLoading, setIsLoading] = useState(true);
  const signOut = useSignOut();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  console.log('User: ', me);

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={isLoading ? [] : rides}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        renderItem={({item}) => <RideCard ride={item as any} />}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!isLoading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  alt="No recent rides found"
                  resizeMode="contain"
                />
                <Text className="text-sm">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-2xl font-JakartaExtraBold">
                Welcome {me?.displayName}
              </Text>
              <TouchableOpacity
                onPress={signOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white">
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>

            {/*<GoogleTextInput*/}
            {/*  icon={icons.search}*/}
            {/*  containerStyle="bg-white shadow-md shadow-neutral-300"*/}
            {/*  handlePress={() => {*/}
            {/*    // handleDestinationPress;*/}
            {/*  }}*/}
            {/*/>*/}

            <>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Your current location
              </Text>
              <View className="flex flex-row items-center bg-transparent h-[300px] rounded-3xl overflow-hidden">
                <Map />
              </View>
            </>

            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent Rides
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
}
