import {useCallback} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {useGetProducts} from '../../hooks/useGetProducts';
import {Column, InfinityScrollFlatList} from '../../../../shared/components';
import {ProductListItem} from '../ProductListItem';
import {TEXTS} from '../../../../shared/constants/texts';
import {IProduct} from '../../../../shared/types';

interface IProductListProps {
  search: string;
}

export function ProductList({search}: IProductListProps) {
  const {products, fetchNextPage, refetch, isRefetching, isFetching} =
    useGetProducts();

  const renderItem = useCallback(
    ({item: product}: ListRenderItemInfo<IProduct>) => (
      <ProductListItem product={product} style={{flex: 0.5}} />
    ),
    [],
  );

  return (
    <Column padding="s" flex={1}>
      <InfinityScrollFlatList
        isFetching={isFetching}
        emptyListText={TEXTS.NO_PRODUCTS_FOUND}
        data={products?.filter(product =>
          product.title.toLowerCase().includes(search.toLowerCase()),
        )}
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
