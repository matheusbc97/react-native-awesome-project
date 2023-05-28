import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useGetEnhancedStyles} from '../hooks/useGetEnhancedStyles';
import {IEnhancedStyleProps} from '../types/IEnhancedStyleProps';
import {PropsWithChildren} from 'react';

interface IButtonProps extends IEnhancedStyleProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Button({
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
  children,
}: PropsWithChildren<IButtonProps>) {
  const getStyle = useGetEnhancedStyles();

  return (
    <TouchableOpacity
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
      ]}>
      {children}
    </TouchableOpacity>
  );
}
