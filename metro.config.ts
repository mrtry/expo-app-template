import withStorybook from '@storybook/react-native/metro/withStorybook';
import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config);
