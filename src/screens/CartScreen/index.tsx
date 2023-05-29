import {ListRenderItemInfo} from 'react-native';

import {IProduct, IScreenProps} from '../../shared/types';
import {FlatList} from '../../shared/components';
import {useGetCartProducts} from '../../shared/hooks';
import {spacing} from '../../shared/theme';

import {CART_ITEM_HEIGHT, CartListItem} from './components/CartListItem';

const renderItem = ({item: product}: ListRenderItemInfo<IProduct>) => (
  <CartListItem product={product} />
);

export function CartScreen({}: IScreenProps<'Cart'>) {
  const cartProducts = useGetCartProducts();

  return (
    <FlatList
      style={{paddingVertical: spacing.xs}}
      data={cartProducts}
      emptyListText="Carrinho Vazio"
      keyExtractor={product => product.id.toString()}
      renderItem={renderItem}
      getItemLayout={(data, index) => ({
        length: CART_ITEM_HEIGHT,
        offset: CART_ITEM_HEIGHT * index,
        index,
      })}
    />
  );
}
