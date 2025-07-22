import type { Preview } from '@storybook/react';
import { ApplicationRoot } from '../src/features/application/components/ApplicationRoot';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ApplicationRoot>
        <Story />
      </ApplicationRoot>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
