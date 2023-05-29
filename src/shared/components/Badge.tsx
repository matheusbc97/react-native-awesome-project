import {StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {Column} from './Column';
import {Text} from './Text';

export interface IBadgeProps {
  count: number;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    height: 22,
    width: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
});

export function Badge({count, style}: IBadgeProps) {
  return (
    <Column style={[styles.badge, style]}>
      <Text style={styles.text}>{count > 99 ? '99+' : count}</Text>
    </Column>
  );
}
