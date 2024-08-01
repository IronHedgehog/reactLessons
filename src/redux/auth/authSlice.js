import { createSlice } from "@reduxjs/toolkit";
import { logIn, refreshUser, signUp } from "./operations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
  // TODO: додати перезавантаження юзера
  // TODO: Додати logOut
};

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = { email: payload.email, name: payload.name };
      state.token = payload.token;
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = { email: payload.email, name: payload.name };
      state.token = payload.token;
    });
    builder.addCase(refreshUser.pending, (state, { payload }) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      const userr = payload.find((user) => user.token === state.token);
      const user = { name: userr.name, email: userr.email };
      state.user = user;
      // { email: payload.email, name: payload.name };
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state, { payload }) => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = userSlice.reducer;
