import {useDispatch} from 'react-redux';

import {IProduct} from '../types';
import {addProductToCart} from '../../core/store/slices/cartSlice';

export function useAddProductToCart() {
  const dispatch = useDispatch();

  return (product: IProduct) => {
    dispatch(addProductToCart(product));
  };
}
