import {View, ViewStyle, StyleProp} from 'react-native';
import {IEnhancedStyleProps} from '../types/IEnhancedStyleProps';
import {useGetEnhancedStyles} from '../hooks/useGetEnhancedStyles';
import {PropsWithChildren} from 'react';
import {TEST_IDS} from '../constants/testIds';

export interface IEnhancedViewProps extends IEnhancedStyleProps {
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function EnhancedView({
  testID = TEST_IDS.ENHANCED_VIEW,
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
      testID={testID}
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
