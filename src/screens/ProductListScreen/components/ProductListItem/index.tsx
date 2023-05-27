import {View, Text, StyleProp, ViewStyle, Image} from 'react-native';

import {IProduct} from '../../../../shared/types';
import {TextButton} from '../../../../shared/components';

import styles from './styles';

export interface IProductListItemProps {
  style?: StyleProp<ViewStyle>;
  product: IProduct;
}

export function ProductListItem({style, product}: IProductListItemProps) {
  return (
    <View style={[style, styles.container]}>
      <Image source={{uri: product.thumbnail, height: 120}} />
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
      </View>
      <View style={styles.footer}>
        <TextButton onPress={() => {}} text="ADICIONAR" color="success" />
      </View>
    </View>
  );
}
