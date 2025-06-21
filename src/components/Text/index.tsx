import { Text as RNPText, TextProps as RNPTextProps } from 'react-native-paper';
import { FC } from "react";

type TextProps = Omit<RNPTextProps<string>, 'variant'> & { variant: NonNullable<RNPTextProps<string>['variant']> };

export const Text: FC<TextProps> = (props) => {
  return <RNPText {...props} />;
};