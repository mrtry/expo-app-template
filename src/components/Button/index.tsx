import { Button as RNPButton, ButtonProps as RNPButtonProps } from 'react-native-paper';
import { FC } from "react";

type ButtonProps = Omit<RNPButtonProps, 'mode'> & { mode: NonNullable<RNPButtonProps['mode']> };

export const Button: FC<ButtonProps> = (props) => {
  return <RNPButton {...props} />;
};