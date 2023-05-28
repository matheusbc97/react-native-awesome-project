import {View, ViewStyle, StyleProp} from 'react-native';
import {IEnhancedStyleProps} from '../types/IEnhancedStyleProps';
import {useGetEnhancedStyles} from '../hooks/useGetEnhancedStyles';
import {PropsWithChildren} from 'react';

export interface IEnhancedViewProps extends IEnhancedStyleProps {
  style?: StyleProp<ViewStyle>;
}

export function EnhancedView({
  style,
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
  ...props
}: PropsWithChildren<IEnhancedViewProps>) {
  const getEnhancedViewStyle = useGetEnhancedStyles();
  return (
    <View
      style={[
        getEnhancedViewStyle({
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
      {...props}
    />
  );
}
