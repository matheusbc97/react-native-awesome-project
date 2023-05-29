import {PropsWithChildren} from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {useGetEnhancedStyles} from '../hooks/useGetEnhancedStyles';
import {IEnhancedStyleProps} from '../types/IEnhancedStyleProps';
import {TEST_IDS} from '../constants/testIds';

interface ITextProps extends TextProps, IEnhancedStyleProps {
  testID?: string;
}

export function Text({
  testID = TEST_IDS.TEXT,
  padding,
  margin,
  marginVertical,
  marginHorizontal,
  paddingHorizontal,
  paddingVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  flex,
  elevated,
  backgroundColor,
  children,
  style,
  ...props
}: PropsWithChildren<ITextProps>) {
  const getStyle = useGetEnhancedStyles();

  return (
    <RNText
      testID={testID}
      style={[
        getStyle({
          padding,
          margin,
          marginVertical,
          marginHorizontal,
          paddingHorizontal,
          paddingVertical,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          paddingTop,
          paddingBottom,
          paddingLeft,
          paddingRight,
          flex,
          elevated,
          backgroundColor,
        }),
        style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
}
