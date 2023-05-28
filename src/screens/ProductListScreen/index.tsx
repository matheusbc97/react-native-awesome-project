import {SafeAreaView} from 'react-native';

import {ProductList} from './components/ProductList';

import {AppErrorBoundary, LoadingSuspense} from '../../shared/components';
import {IScreenProps} from '../../shared/types';

export function ProductListScreen({}: IScreenProps<'ProductList'>) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoadingSuspense>
        <AppErrorBoundary>
          <ProductList />
        </AppErrorBoundary>
      </LoadingSuspense>
    </SafeAreaView>
  );
}
