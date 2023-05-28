import {StyleProp, ViewStyle} from 'react-native';
import {EnhancedView, IEnhancedViewProps} from './EnhancedView';
import {PropsWithChildren} from 'react';

export interface IRowProps extends IEnhancedViewProps {
  style: StyleProp<Omit<ViewStyle, 'flexDirection'>>;
}

export function Row({style, ...props}: PropsWithChildren<IRowProps>) {
  return (
    <EnhancedView
      style={[{alignItems: 'center', flexDirection: 'row'}, style]}
      {...props}
    />
  );
}
