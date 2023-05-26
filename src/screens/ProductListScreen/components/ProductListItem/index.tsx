import {View, Text, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';
import {IProduct} from '../../../../shared/types';

export interface IProductListItemProps {
  style?: StyleProp<ViewStyle>;
  product: IProduct;
}

export function ProductListItem({style, product}: IProductListItemProps) {
  return (
    <View style={[style, styles.container]}>
      <Text>ProductListItem</Text>
    </View>
  );
}
