import {useGetProducts} from '../../hooks/useGetProducts';
import {Column, InfinityScrollFlatList} from '../../../../shared/components';

import {ProductListItem} from '../ProductListItem';

export function ProductList() {
  const {products, fetchNextPage, refetch, isRefetching} = useGetProducts();

  return (
    <Column padding="s" flex={1}>
      <InfinityScrollFlatList
        emptyListText="Nenhum produto encontrado"
        data={products}
        renderItem={({item: product}) => (
          <ProductListItem product={product} style={{flex: 0.5}} />
        )}
        keyExtractor={product => product.id.toString()}
        numColumns={2}
        onEndReached={fetchNextPage}
        onRefresh={refetch}
        refreshing={isRefetching}
      />
    </Column>
  );
}
