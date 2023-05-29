import {FontAwesome5} from '@expo/vector-icons';

import {Row, Text, Button, Image} from '../../../shared/components';
import {IProduct} from '../../../shared/types';
import {useRemoveProductFromCart} from '../../../shared/hooks';

interface ICartListItemProps {
  product: IProduct;
}

export const CART_ITEM_HEIGHT = 50;

export function CartListItem({product}: ICartListItemProps) {
  const removeProduct = useRemoveProductFromCart();

  return (
    <Row
      backgroundColor="surface"
      marginVertical="s"
      marginHorizontal="m"
      style={{borderRadius: 2, overflow: 'hidden', height: CART_ITEM_HEIGHT}}>
      <Image
        source={product.thumbnail}
        style={{width: 50, height: CART_ITEM_HEIGHT}}
      />
      <Text
        flex={1}
        paddingHorizontal="m"
        paddingVertical="xs"
        numberOfLines={2}>
        {product.title}
      </Text>
      <Button
        onPress={() => removeProduct(product.id)}
        padding="xs"
        marginHorizontal="m">
        <FontAwesome5 name="trash" size={18} color="black" />
      </Button>
    </Row>
  );
}
