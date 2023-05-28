import {StyleProp, ViewStyle, Image} from 'react-native';

import {IProduct} from '../../../../shared/types';
import {Column, Text, TextButton} from '../../../../shared/components';

import styles from './styles';

export interface IProductListItemProps {
  style?: StyleProp<ViewStyle>;
  product: IProduct;
}

export function ProductListItem({style, product}: IProductListItemProps) {
  return (
    <Column
      margin="s"
      elevated
      backgroundColor="surface"
      style={[style, styles.container]}>
      <Image source={{uri: product.thumbnail, height: 120}} />
      <Column paddingVertical="s" paddingHorizontal="m" flex={1}>
        <Text numberOfLines={2}>{product.title}</Text>
      </Column>
      <Column paddingBottom="s" style={styles.footer}>
        <TextButton onPress={() => {}} text="ADICIONAR" color="success" />
      </Column>
    </Column>
  );
}
