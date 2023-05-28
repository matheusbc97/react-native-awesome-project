import {StyleProp, ViewStyle} from 'react-native';
import {EnhancedView, IEnhancedViewProps} from './EnhancedView';
import { PropsWithChildren } from 'react';

export interface IColumnProps extends IEnhancedViewProps {
  style?: StyleProp<Omit<ViewStyle, 'flexDirection'>>;
}

export function Column({style, ...props}: PropsWithChildren<IColumnProps>) {
  return (
    <EnhancedView
      style={[{flexDirection: 'column'}, style]}
      {...props}
    />
  );
}
