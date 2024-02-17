import { createSlice } from "@reduxjs/toolkit";

const initialState =  [];

const cartSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
   add(state, action) {
  const courseToAdd = action.payload;
  const existingCourseIndex = state.findIndex(course => course.id === courseToAdd.id);

  if (existingCourseIndex === -1) {
    // Course not found in the cart, add it
    return [...state, courseToAdd];
  } else {
    return state;
  }
},

    // remove reducers 
    remove(state, action){
        return state.filter(item => item.id !== action.payload);
    }
  },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;
