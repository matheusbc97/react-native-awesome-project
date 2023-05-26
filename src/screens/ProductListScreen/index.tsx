import {SafeAreaView, FlatList} from 'react-native';
import {ProductListItem} from './components/ProductListItem';

const products = [1, 2, 3, 4, 5, 6];

export function ProductListScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={products}
        renderItem={() => <ProductListItem style={{flex: 0.5}} />}
        keyExtractor={item => item.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
