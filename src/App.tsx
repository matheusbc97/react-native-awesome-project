import Constants from 'expo-constants';

if (Constants.expoConfig?.extra?.isDocs) {
  module.exports = require('../.storybook').default;
} else {
  module.exports = require('./core/Main').default;
}
