import {useSelector} from 'react-redux';
import {selectCartProductsTotal} from '../../core/store/slices/cartSlice';
import {RootState} from '../../core/store';

export function useGetCartProductsTotal() {
  const cartProducts = useSelector((state: RootState) =>
    selectCartProductsTotal(state.cart.products),
  );

  return cartProducts;
}
