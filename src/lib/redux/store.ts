import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slice/cart.slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
