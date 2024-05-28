import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { taskReducer } from "./slice";
import { useDispatch } from "react-redux";
useDispatch;
// Створення загального стору в який ми передали загальний стейт та підключення девтулзів
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
});
