module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],

  //!!!react-native-reanimated/plugin has to be listed last.!!!
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
