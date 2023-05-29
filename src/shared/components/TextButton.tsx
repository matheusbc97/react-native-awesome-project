import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {Text} from './Text';
import {spacing} from '../theme';

export interface ITextButtonProps {
  onPress: () => void;
  text: string;
  color?: 'success' | 'danger';
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function TextButton({onPress, text, style, testID}: ITextButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      style={[{padding: spacing.xs}, style]}
      onPress={onPress}>
      <Text style={{color: '#388E3C'}}>{text}</Text>
    </TouchableOpacity>
  );
}
