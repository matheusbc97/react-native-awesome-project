import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useGetEnhancedStyles} from '../hooks/useGetEnhancedStyles';
import {IEnhancedStyleProps} from '../types/IEnhancedStyleProps';
import {PropsWithChildren} from 'react';
import {TEST_IDS} from '../constants/testIds';

interface IButtonProps extends IEnhancedStyleProps {
  onPress: () => void;
  testID?: string;
  style?: StyleProp<ViewStyle>;
}

export function Button({
  style,
  testID = TEST_IDS.BUTTON,
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
  ...props
}: PropsWithChildren<IButtonProps>) {
  const getStyle = useGetEnhancedStyles();

  return (
    <TouchableOpacity
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
    </TouchableOpacity>
  );
}
