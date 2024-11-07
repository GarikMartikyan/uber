import React, {useState} from 'react';
import {Animated, Image, useWindowDimensions, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

type Props = {
  onAnimationEnd: () => void;
};

const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const {height} = useWindowDimensions();
  const [translateY] = useState(() => new Animated.Value(0));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../assets/manifest.json'),

    logo: require('../assets/logo.png'),
    // darkLogo: require("../assets/bootsplash/dark-logo.png"),
    // brand: require("../assets/bootsplash/brand.png"),
    // darkBrand: require("../assets/bootsplash/dark-brand.png"),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      // Perform animations and call onAnimationEnd
      Animated.spring(translateY, {
        useNativeDriver: true,
        toValue: height,
        speed: 0.1,
        // duration: 500,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });
  console.log(container, logo);

  return (
    <Animated.View
      {...container}
      style={[container.style, {transform: [{translateY}]}]}>
      <Image {...logo} />
    </Animated.View>
  );
};

export const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{flex: 1}}>
      {/* content */}

      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
    </View>
  );
};
