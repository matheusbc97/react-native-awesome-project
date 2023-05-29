import {EntityState, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../../../shared/types';

const productsAdapter = createEntityAdapter<IProduct>({
  selectId: product => product.id,
  //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const selectors = productsAdapter.getSelectors();

export interface CartState {
  products: EntityState<IProduct>;
}

const initialState: CartState = {
  products: productsAdapter.getInitialState(),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<IProduct>) => {
      productsAdapter.addOne(state.products, action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<{id: number}>) => {
      productsAdapter.removeOne(state.products, action.payload.id);
    },
  },
});

export const {addProductToCart, removeProductFromCart} = cartSlice.actions;

const selectCartProducts = selectors.selectAll;
const selectCartProductById = selectors.selectById;
const selectCartProductsTotal = selectors.selectTotal;

export {selectCartProducts, selectCartProductById, selectCartProductsTotal};

export default cartSlice.reducer;
