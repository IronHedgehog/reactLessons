import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [], isLoading: false, error: null };

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Виконуватись в момент старту запиту
    fetchingTasks(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingTasks, fetchingSuccess, fetchingError } =
  taskSlice.actions;
