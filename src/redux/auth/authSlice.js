import { createSlice } from "@reduxjs/toolkit";
import { logIn, signUp } from "./operations";

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  token: null,
  // TODO: додати перезавантаження юзера
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
  },
});

export const authReducer = userSlice.reducer;
