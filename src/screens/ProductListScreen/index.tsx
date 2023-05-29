import {SafeAreaView} from 'react-native';

import {ProductList} from './components/ProductList';

import {IScreenProps} from '../../shared/types';
import {ProductListContainer} from './components/ProductListContainer';

export function ProductListScreen({}: IScreenProps<'ProductList'>) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProductListContainer>
        <ProductList />
      </ProductListContainer>
    </SafeAreaView>
  );
}
