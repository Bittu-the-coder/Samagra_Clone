module.exports = {
  presets: ["babel-preset-expo"],
  plugins: ["react-native-reanimated/plugin"], // Required for reanimated to work
};


// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     [
//       'module:react-native-dotenv', {
//         moduleName: '@env', // Name of the module to import from
//         path: '.env', // Path to your .env file
//         safe: false, // Set to true if you want to enforce .env variables exist
//         allowUndefined: true, // Allow undefined variables
//       },
//     ],
//   ],
// };