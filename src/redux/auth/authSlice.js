import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [], isLoading: false, isError: null };

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("");
  },
});
