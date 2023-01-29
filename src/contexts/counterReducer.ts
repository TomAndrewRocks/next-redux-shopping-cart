import { api } from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface CounterState {
  value: number;
  cartOnScreen: boolean;
  cartItems: [] | any;
  status: string;
}

const initialState: CounterState = {
  value: 1,
  cartOnScreen: false,
  cartItems: [],
  status: "",
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await api.get(
      `/products?page=1&rows=8&sortBy=id&orderBy=ASC`
    );
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counterReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const onCart = state.cartItems.find(
        (item: Element) => item.id === action.payload.id
      );
      if (onCart) {
        onCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );
      state.cartItems = removeItem;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    increment: (state, action) => {
      const item = state.cartItems.find(
        (item: Element) => item.id === action.payload
      );
      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.cartItems.find(
        (item: Element) => item.id === action.payload
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    showCart: (state) => {
      state.cartOnScreen = true;
    },
    closeCart: (state) => {
      state.cartOnScreen = false;
    },
  },
});

export const {
  increment,
  decrement,
  showCart,
  closeCart,
  addToCart,
  removeFromCart,
  clearCart,
} = counterSlice.actions;

export const selectValue = (state: RootState) => state.counter.value;

export const cartItemsLength = (state: RootState) => state.counter.cartItems;

export const cartVisible = (state: RootState) => state.counter.cartOnScreen;

export default counterSlice.reducer;
