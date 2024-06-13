import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [], isLoading: false, error: null };
// null
// undefined

// null - може написати або повернути вам тільки інший розробник
// undefined - js не знайшов операнд з яким він амє працювати
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Виконуватись в момент старту запиту
    fetchingTasks(state) {
      state.isLoading = true;
    },
    //  Виконуватись в момент успіху запиту
    fetchingSuccess(state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.tasks = payload;
    },
    //  Виконуватись в момент помилки запиту
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingTasks, fetchingSuccess, fetchingError } =
  taskSlice.actions;

export const taskReducer = taskSlice.reducer;
