import {View} from 'react-native';

import {useGetProducts} from '../../hooks/useGetProducts';
import {spacing} from '../../../../shared/theme';
import {InfinityScrollFlatList} from '../../../../shared/components';

import {ProductListItem} from '../ProductListItem';

export function ProductList() {
  const {products, fetchNextPage, refetch, isRefetching} = useGetProducts();

  return (
    <View style={{padding: spacing.small, flex: 1}}>
      <InfinityScrollFlatList
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
    </View>
  );
}
