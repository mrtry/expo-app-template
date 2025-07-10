import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react-native';
import React from 'react';

// 公式ガイドに従ってcomposeStoriesを使用
import * as stories from '@/components/Text/Text.stories';

// 全てのストーリーをテスト可能なコンポーネントに変換
const { AllVariants } = composeStories(stories);

describe('Text Component', () => {
  it('snapshot', () => {
    const { toJSON } = render(<AllVariants />);
    expect(toJSON()).toMatchSnapshot();
  });
});
