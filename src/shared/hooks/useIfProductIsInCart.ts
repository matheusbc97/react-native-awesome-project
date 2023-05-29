import {useSelector} from 'react-redux';
import {RootState} from '../../core/store';
import {selectCartProductById} from '../../core/store/slices/cartSlice';

export function useIfProductIsInCart(productId: number) {
  const cartProduct = useSelector(
    (state: RootState) =>
      !!selectCartProductById(state.cart.products, productId),
  );

  return cartProduct;
}
