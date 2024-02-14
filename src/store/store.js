import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";

const store = configureStore({
  reducer: {
    courses: cartSlice,
    // Add more reducers if needed
  },
});

export default store;
