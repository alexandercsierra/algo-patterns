import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      if (action.payload?._id !== state.user?._id) {
        state.user = action.payload;
      }
    },
  },
});

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
