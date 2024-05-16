import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, taskReducer } from "./reducer";

// Створення загального стору в який ми передали загальний стейт та підключення девтулзів
export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
});
