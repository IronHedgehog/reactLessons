import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6672fd0a6ca902ae11b2b1ad.mockapi.io/";
// ТОкен ми маємо прикріпляти до кожного запиту
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (signUpUserData, thunkApi) => {
    // signUpUserData = {name,email,password}
    try {
      const { data } = await axios.post("/users", signUpUserData);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userLoginData, thunkApi) => {
    try {
      // /users/login
      // email,password
      const { data } = await axios.post("/users", userLoginData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue("login another one");
    }
    try {
      // "/users/me"
      setAuthHeader(persistedToken);
      const { data } = await axios.get("/users");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
