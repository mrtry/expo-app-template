import withStorybook from '@storybook/react-native/metro/withStorybook';
import { getDefaultConfig } from 'expo/metro-config';

const STORYBOOK_ENABLED = process.env.STORYBOOK_ENABLED === 'true';

const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config, {
  enabled: STORYBOOK_ENABLED,
  onDisabledRemoveStorybook: !STORYBOOK_ENABLED,
});
