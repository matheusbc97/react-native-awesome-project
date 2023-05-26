import {SafeAreaView} from 'react-native';

import {ProductList} from './components/ProductList';

import {AppErrorBoundary, LoadingSuspense} from '../../shared/components';

export function ProductListScreen() {
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
