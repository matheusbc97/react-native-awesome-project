import {FlatList, View} from 'react-native';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductListItem} from '../ProductListItem';
import {spacing} from '../../../../shared/theme';

export function ProductList() {
  const {products} = useGetProducts();

  return (
    <View style={{padding: spacing.small}}>
      <FlatList
        data={products}
        renderItem={({item: product}) => (
          <ProductListItem product={product} style={{flex: 0.5}} />
        )}
        keyExtractor={product => product.id.toString()}
        numColumns={2}
      />
    </View>
  );
}
