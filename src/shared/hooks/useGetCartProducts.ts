import {useSelector} from 'react-redux';
import {selectCartProducts} from '../../core/store/slices/cartSlice';
import {RootState} from '../../core/store';

export function useGetCartProducts() {
  const cartProducts = useSelector((state: RootState) =>
    selectCartProducts(state.cart.products),
  );

  return cartProducts;
}
