import {View, Text, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';

export interface IProductListItemProps {
  style?: StyleProp<ViewStyle>;
}

export function ProductListItem({style}: IProductListItemProps) {
  return (
    <View style={[style, styles.container]}>
      <Text>ProductListItem</Text>
    </View>
  );
}
