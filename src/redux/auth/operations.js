import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ТОкен ми маємо прикріпляти до кожного запиту
axios.defaults.baseURL = "https://6672fd0a6ca902ae11b2b1ad.mockapi.io/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (signUpUserData, thunkApi) => {
    try {
      const { data } = await axios.post("/users", signUpUserData);

      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
