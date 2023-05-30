import {FontAwesome5} from '@expo/vector-icons';

import {Row, Text, Button, Image} from '../../../shared/components';
import {IProduct} from '../../../shared/types';
import {useRemoveProductFromCart} from '../../../shared/hooks';
import {TEST_IDS} from '../../../shared/constants/testIds';
import {View} from 'react-native';
import styles from './styles';

interface ICartListItemProps {
  product: IProduct;
  testID?: string;
}

export function CartListItem({
  product,
  testID = TEST_IDS.CART_LIST_ITEM,
}: ICartListItemProps) {
  const removeProduct = useRemoveProductFromCart();

  return (
    <Row
      elevated
      testID={testID}
      backgroundColor="surface"
      marginVertical="s"
      marginHorizontal="m"
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.thumbnail} style={styles.image} />
      </View>
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
