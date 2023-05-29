import {useCallback} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {useGetProducts} from '../../hooks/useGetProducts';
import {Column, InfinityScrollFlatList} from '../../../../shared/components';
import {ProductListItem} from '../ProductListItem';
import {TEXTS} from '../../../../shared/constants/texts';
import {IProduct} from '../../../../shared/types';

export function ProductList() {
  const {products, fetchNextPage, refetch, isRefetching} = useGetProducts();

  const renderItem = useCallback(
    ({item: product}: ListRenderItemInfo<IProduct>) => (
      <ProductListItem product={product} style={{flex: 0.5}} />
    ),
    [],
  );

  return (
    <Column padding="s" flex={1}>
      <InfinityScrollFlatList
        emptyListText={TEXTS.NO_PRODUCTS_FOUND}
        data={products}
        renderItem={renderItem}
        keyExtractor={product => product.id.toString()}
        numColumns={2}
        onEndReached={fetchNextPage}
        onRefresh={refetch}
        refreshing={isRefetching}
      />
    </Column>
  );
}
