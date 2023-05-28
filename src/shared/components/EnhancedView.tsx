import {View, ViewStyle, StyleProp} from 'react-native';
import {IEnhancedStyleProps} from '../types/IEnhancedStyleProps';
import {useGetEnhancedStyles} from '../hooks/useGetEnhancedStyles';
import {PropsWithChildren} from 'react';

export interface IEnhancedViewProps extends IEnhancedStyleProps {
  style?: StyleProp<ViewStyle>;
}

export function EnhancedView({
  style,
  ...props
}: PropsWithChildren<IEnhancedViewProps>) {
  const getEnhancedViewStyle = useGetEnhancedStyles();
  return <View style={[getEnhancedViewStyle(props), style]} {...props} />;
}
