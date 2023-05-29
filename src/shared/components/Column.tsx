import {StyleProp, ViewStyle} from 'react-native';
import {EnhancedView, IEnhancedViewProps} from './EnhancedView';
import {PropsWithChildren} from 'react';

export interface IColumnProps extends IEnhancedViewProps {
  style?: StyleProp<Omit<ViewStyle, 'flexDirection'>>;
  testID?: string;
}

export function Column({
  style,
  testID,
  ...props
}: PropsWithChildren<IColumnProps>) {
  return (
    <EnhancedView
      testID={testID}
      style={[{flexDirection: 'column'}, style]}
      {...props}
    />
  );
}
