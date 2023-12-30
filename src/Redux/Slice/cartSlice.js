import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    items: [],
    Shipping:0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push({ ...newItem});
      state.totalPrice+=newItem.price
    },
    minusItemFromCart: (state, action) => {
      const { itemId, index } = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
    
      if (existingItem) {
        state.totalPrice -= existingItem.price;
        state.count -= existingItem.quantity;
        state.items.splice(index, 1);
      }
    },
    addShipping: (state, action) => {
      state.Shipping=action.payload
    },
    
    
  },
});

export const { addItemToCart,minusItemFromCart,addShipping} =
  cartSlice.actions;
export default cartSlice.reducer;
