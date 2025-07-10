import type { Meta, StoryObj } from '@storybook/react';

import { ScrollView, View } from 'react-native';

import { Text } from './index';

const meta = {
  component: Text,
  tags: ['autodocs'],
  title: 'Components/Text',
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  args: {
    children: 'Placeholder',
    variant: 'bodyMedium',
  },
  render: () => (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ gap: 16, padding: 16 }}>
        <View style={{ marginBottom: 8 }}>
          <Text style={{ marginBottom: 4 }} variant="headlineSmall">
            Display Variants
          </Text>
          <View style={{ gap: 8 }}>
            <Text variant="displayLarge">Display Large Text</Text>
            <Text variant="displayMedium">Display Medium Text</Text>
            <Text variant="displaySmall">Display Small Text</Text>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text style={{ marginBottom: 4 }} variant="headlineSmall">
            Headline Variants
          </Text>
          <View style={{ gap: 8 }}>
            <Text variant="headlineLarge">Headline Large Text</Text>
            <Text variant="headlineMedium">Headline Medium Text</Text>
            <Text variant="headlineSmall">Headline Small Text</Text>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text style={{ marginBottom: 4 }} variant="headlineSmall">
            Title Variants
          </Text>
          <View style={{ gap: 8 }}>
            <Text variant="titleLarge">Title Large Text</Text>
            <Text variant="titleMedium">Title Medium Text</Text>
            <Text variant="titleSmall">Title Small Text</Text>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text style={{ marginBottom: 4 }} variant="headlineSmall">
            Label Variants
          </Text>
          <View style={{ gap: 8 }}>
            <Text variant="labelLarge">Label Large Text</Text>
            <Text variant="labelMedium">Label Medium Text</Text>
            <Text variant="labelSmall">Label Small Text</Text>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text style={{ marginBottom: 4 }} variant="headlineSmall">
            Body Variants
          </Text>
          <View style={{ gap: 8 }}>
            <Text variant="bodyLarge">
              Body Large Text - This is a longer text to demonstrate the body text variant styling.
            </Text>
            <Text variant="bodyMedium">
              Body Medium Text - This is a longer text to demonstrate the body text variant styling.
            </Text>
            <Text variant="bodySmall">
              Body Small Text - This is a longer text to demonstrate the body text variant styling.
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text style={{ marginBottom: 4 }} variant="headlineSmall">
            Custom Style
          </Text>
          <Text style={{ color: '#e91e63', textAlign: 'center' }} variant="titleLarge">
            Custom Styled Text
          </Text>
        </View>
      </View>
    </ScrollView>
  ),
};
