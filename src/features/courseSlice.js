import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    data:[],  };

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
   
  },
});

export const {  } = courseSlice.actions;
export default courseSlice.reducer;
