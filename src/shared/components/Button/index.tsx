import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {useGetEnhancedStyles} from '../../hooks/useGetEnhancedStyles';
import {IEnhancedStyleProps} from '../../types/IEnhancedStyleProps';
import {PropsWithChildren} from 'react';
import {TEST_IDS} from '../../constants/testIds';

interface IButtonProps extends IEnhancedStyleProps {
  onPress: () => void;
  testID?: string;
  style?: StyleProp<ViewStyle>;
}

export function Button({
  style,
  testID = TEST_IDS.BUTTON,
  onPress,
  children,
  ...props
}: PropsWithChildren<IButtonProps>) {
  const getStyle = useGetEnhancedStyles();

  return (
    <TouchableOpacity
      testID={testID}
      style={[getStyle(props), style]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
