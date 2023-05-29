import {StyleProp, ViewStyle, Image} from 'react-native';

import {IProduct} from '../../../../shared/types';
import {Column, Text, TextButton} from '../../../../shared/components';
import {
  useAddProductToCart,
  useIfProductIsInCart,
  useRemoveProductFromCart,
} from '../../../../shared/hooks';

import styles from './styles';
import {TEST_IDS} from '../../../../shared/constants/testIds';

export interface IProductListItemProps {
  style?: StyleProp<ViewStyle>;
  product: IProduct;
}

export function ProductListItem({style, product}: IProductListItemProps) {
  const addProduct = useAddProductToCart();
  const removeProduct = useRemoveProductFromCart();
  const isProductInCart = useIfProductIsInCart(product.id);

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
        {isProductInCart ? (
          <TextButton
            testID={TEST_IDS.PRODUCT_LIST_ITEM_REMOVE_BUTTON}
            onPress={() => removeProduct(product.id)}
            text="REMOVER"
            color="success"
          />
        ) : (
          <TextButton
            testID={TEST_IDS.PRODUCT_LIST_ITEM_ADD_BUTTON}
            onPress={() => addProduct(product)}
            text="ADICIONAR"
            color="success"
          />
        )}
      </Column>
    </Column>
  );
}
