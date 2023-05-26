import {FlatList} from 'react-native';
import {useGetProducts} from '../../hooks/useGetProducts';
import {ProductListItem} from '../ProductListItem';

export function ProductList() {
  const {products} = useGetProducts();

  return (
    <FlatList
      data={products}
      renderItem={({item: product}) => (
        <ProductListItem product={product} style={{flex: 0.5}} />
      )}
      keyExtractor={product => product.id.toString()}
      numColumns={2}
    />
  );
}
