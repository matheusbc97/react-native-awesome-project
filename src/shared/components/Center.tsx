import {PropsWithChildren} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {TEST_IDS} from '../constants/testIds';

export interface ICenterProps {
  style?: ViewStyle;
  testID?: string;
}

export function Center({
  style,
  children,
  testID = TEST_IDS.CENTER,
}: PropsWithChildren<ICenterProps>) {
  return (
    <View testID={testID} style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
