import React, { FC } from 'react';
import { Button as RNPButton, ButtonProps as RNPButtonProps } from 'react-native-paper';

type ButtonProps = Omit<RNPButtonProps, 'mode'> & { mode: NonNullable<RNPButtonProps['mode']> };

export const Button: FC<ButtonProps> = (props) => {
  return <RNPButton {...props} />;
};
