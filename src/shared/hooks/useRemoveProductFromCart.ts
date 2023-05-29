import {useDispatch} from 'react-redux';
import {removeProductFromCart} from '../../core/store/slices/cartSlice';

export function useRemoveProductFromCart() {
  const dispatch = useDispatch();

  return (productId: number) => {
    dispatch(
      removeProductFromCart({
        id: productId,
      }),
    );
  };
}
