import {PropsWithChildren} from 'react';
import {renderHook} from '@testing-library/react-native';
import {useAddProductToCart} from '.';
import {GlobalStoreProvider} from '../../../../../core/providers';
import {mockedProducts} from '../../../../mocks/products';
import {store} from '../../../../../core/store';
import {selectCartProducts} from '../../../../../core/store/slices/cartSlice';

describe('useAddProductToCart hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add product to cart', async () => {
    const wrapper = ({children}: PropsWithChildren) => (
      <GlobalStoreProvider>{children}</GlobalStoreProvider>
    );

    const {result} = renderHook(() => useAddProductToCart(), {wrapper});

    const mockProduct = mockedProducts[0];

    result.current(mockProduct);

    expect(selectCartProducts(store.getState().cart.products)).toStrictEqual([
      mockProduct,
    ]);
  });
});
