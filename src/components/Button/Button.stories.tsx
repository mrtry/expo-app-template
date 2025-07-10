import type { Meta, StoryObj } from '@storybook/react';

import { ScrollView, View } from 'react-native';
import { fn } from 'storybook/test';

import { Button } from './index';
import { Text as PaperText } from '@/components/Text';

const meta = {
  args: { onPress: fn() },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  args: {
    children: 'Placeholder',
    mode: 'contained',
  },
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ gap: 16, padding: 16 }}>
        <View style={{ marginBottom: 8 }}>
          <PaperText style={{ marginBottom: 8 }} variant="headlineSmall">
            Basic Modes
          </PaperText>
          <View style={{ gap: 12 }}>
            <Button mode="contained" onPress={fn()}>
              Contained Button
            </Button>
            <Button mode="outlined" onPress={fn()}>
              Outlined Button
            </Button>
            <Button mode="text" onPress={fn()}>
              Text Button
            </Button>
            <Button mode="elevated" onPress={fn()}>
              Elevated Button
            </Button>
            <Button mode="contained-tonal" onPress={fn()}>
              Contained Tonal Button
            </Button>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <PaperText style={{ marginBottom: 8 }} variant="headlineSmall">
            States
          </PaperText>
          <View style={{ gap: 12 }}>
            <Button disabled mode="contained" onPress={fn()}>
              Disabled Button
            </Button>
            <Button loading mode="contained" onPress={fn()}>
              Loading Button
            </Button>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <PaperText style={{ marginBottom: 8 }} variant="headlineSmall">
            Variations
          </PaperText>
          <View style={{ gap: 12 }}>
            <Button icon="camera" mode="contained" onPress={fn()}>
              Button with Icon
            </Button>
            <Button compact mode="contained" onPress={fn()}>
              Compact Button
            </Button>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <PaperText style={{ marginBottom: 8 }} variant="headlineSmall">
            Custom Colors
          </PaperText>
          <View style={{ gap: 12 }}>
            <Button buttonColor="#e91e63" mode="contained" onPress={fn()} textColor="#ffffff">
              Custom Color Button
            </Button>
            <Button buttonColor="#4caf50" mode="outlined" onPress={fn()} textColor="#4caf50">
              Custom Outlined Button
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  ),
};
