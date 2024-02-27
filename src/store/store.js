import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

const store = configureStore({
  reducer: {
    courses: cartSlice,
  },
});

export default store;
