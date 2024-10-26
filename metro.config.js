const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Initial configuration
const baseConfig = mergeConfig(getDefaultConfig(__dirname), {
  // Any additional config options
});

// Apply NativeWind and then Reanimated configurations
const configWithNativeWind = withNativeWind(baseConfig, {
  input: './src/global.css',
});
module.exports = wrapWithReanimatedMetroConfig(configWithNativeWind);
