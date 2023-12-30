import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slice/cartSlice';
import userSlice from './Slice/userSlice';
export const store = configureStore({
  reducer: { cart: cartSlice,user:userSlice },
});