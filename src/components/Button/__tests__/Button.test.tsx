import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react-native';
import React from 'react';

import * as stories from '@/components/Button/Button.stories';

// 全てのストーリーをテスト可能なコンポーネントに変換
const { AllVariants } = composeStories(stories);

describe('Button Component', () => {
  it('snapshot', () => {
    const { toJSON } = render(<AllVariants />);
    expect(toJSON()).toMatchSnapshot();
  });
});
