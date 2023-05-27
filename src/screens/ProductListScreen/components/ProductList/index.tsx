import {ActivityIndicator, FlatList, View, Text} from 'react-native';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductListItem} from '../ProductListItem';
import {spacing} from '../../../../shared/theme';
import {Center} from '../../../../shared/components';

function ListEmptyComponent() {
  return (
    <Center>
      <Text>Nenhum produto encontrado</Text>
    </Center>
  );
}

export function ProductList() {
  const {products, fetchNextPage, isFetching, refetch} = useGetProducts();

  return (
    <View style={{padding: spacing.small, flex: 1}}>
      <FlatList
        data={products}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={({item: product}) => (
          <ProductListItem product={product} style={{flex: 0.5}} />
        )}
        keyExtractor={product => product.id.toString()}
        numColumns={2}
        onEndReached={fetchNextPage}
        onRefresh={refetch}
        refreshing={isFetching}
        ListFooterComponent={isFetching ? <ActivityIndicator /> : null}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
}
