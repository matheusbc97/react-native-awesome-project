import {PropsWithChildren} from 'react';
import {Text as RNText, TextProps} from 'react-native';

export function Text({children, ...props}: PropsWithChildren<TextProps>) {
  return <RNText {...props}>{children}</RNText>;
}
