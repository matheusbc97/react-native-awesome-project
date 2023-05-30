import {FontAwesome5} from '@expo/vector-icons';

import {Row, Text, Button, Image} from '../../../shared/components';
import {IProduct} from '../../../shared/types';
import {useRemoveProductFromCart} from '../../../shared/hooks';
import {TEST_IDS} from '../../../shared/constants/testIds';

interface ICartListItemProps {
  product: IProduct;
  testID?: string;
}

export const CART_ITEM_HEIGHT = 50;

export function CartListItem({
  product,
  testID = TEST_IDS.CART_LIST_ITEM,
}: ICartListItemProps) {
  const removeProduct = useRemoveProductFromCart();

  return (
    <Row
      testID={testID}
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
        testID={TEST_IDS.CART_LIST_ITEM_REMOVE_BUTTON}
        onPress={() => removeProduct(product.id)}
        padding="xs"
        marginHorizontal="m">
        <FontAwesome5 name="trash" size={18} color="black" />
      </Button>
    </Row>
  );
}
