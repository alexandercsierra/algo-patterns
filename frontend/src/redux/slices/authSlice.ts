import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: null | { _id: string; name: string; email: string; photo: string };
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
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
