import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {Text} from './Text';
import {spacing} from '../theme';

export interface ITextButtonProps {
  onPress: () => void;
  text: string;
  color?: 'success' | 'danger';
  style?: StyleProp<ViewStyle>;
}

export function TextButton({onPress, text, style}: ITextButtonProps) {
  return (
    <TouchableOpacity
      style={[{padding: spacing.xs}, style]}
      onPress={onPress}>
      <Text style={{color: '#388E3C'}}>{text}</Text>
    </TouchableOpacity>
  );
}
