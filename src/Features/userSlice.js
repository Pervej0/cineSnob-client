import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: "",
    isLoading: true,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    handleError: (state, action) => {
      state.error = action.payload;
    },
    handleIsLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { login, logout, handleError, handleIsLoading } =
  userSlice.actions;
// export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
