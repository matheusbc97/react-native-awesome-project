import {PropsWithChildren} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

export interface ICenterProps {
  style?: ViewStyle;
}

export function Center({style, children}: PropsWithChildren<ICenterProps>) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
