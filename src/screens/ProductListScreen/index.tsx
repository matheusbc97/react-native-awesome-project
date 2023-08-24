import {SafeAreaView, TextInput, View} from 'react-native';

import {ProductList} from './components/ProductList';

import {IScreenProps} from '../../shared/types';
import {ProductListContainer} from './components/ProductListContainer';
import {useState} from 'react';
import {SearchInput} from './components/SearchInput';

export function ProductListScreen({}: IScreenProps<'ProductList'>) {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 14,
          paddingBottom: 5,
        }}>
        <SearchInput onSearch={setSearch} />
      </View>
      <ProductListContainer>
        <ProductList search={search} />
      </ProductListContainer>
    </SafeAreaView>
  );
}
