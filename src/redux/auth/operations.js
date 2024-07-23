import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (signUpUserData, thunkApi) => {
    try {
      const { data } = await axios.post("/users", signUpUserData);

      //   setToken(data.token);
    } catch (error) {}
  }
);
