import {ListRenderItemInfo} from 'react-native';

import {IProduct, IScreenProps} from '../../shared/types';
import {FlatList} from '../../shared/components';
import {useCallback} from 'react';

import {useGetCartProducts} from '../../shared/hooks';
import {spacing} from '../../shared/theme';

import {CartListItem} from './components/CartListItem';
import {TEST_IDS} from '../../shared/constants/testIds';
import {CART_ITEM_HEIGHT} from './components/styles';

export function CartScreen({}: IScreenProps<'Cart'>) {
  const cartProducts = useGetCartProducts();

  const renderItem = useCallback(
    ({item: product}: ListRenderItemInfo<IProduct>) => (
      <CartListItem product={product} />
    ),
    [],
  );

  return (
    <FlatList
      testID={TEST_IDS.CART_SCREEN_FLAT_LIST}
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
