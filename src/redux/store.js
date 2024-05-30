import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { filterReducer } from "./filterSlice";
import { taskReducer } from "./slice";
useDispatch;
// Створення загального стору в який ми передали загальний стейт та підключення девтулзів
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
});
