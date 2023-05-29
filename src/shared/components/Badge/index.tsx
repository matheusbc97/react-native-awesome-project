import {StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {Column} from '../Column';
import {Text} from '../Text';
import {TEST_IDS} from '../../constants/testIds';

export interface IBadgeProps {
  count: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
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

export function Badge({count, style, testID = 'badge'}: IBadgeProps) {
  return (
    <Column testID={testID} style={[styles.badge, style]}>
      <Text testID={TEST_IDS.BADGE} style={styles.text}>
        {count > 99 ? '99+' : count}
      </Text>
    </Column>
  );
}
