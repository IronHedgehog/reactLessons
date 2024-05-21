import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskInitState = [];

// createSlice(); - зроби шматочок
// Генерую автоматично екшени
// Генерує reducer

const tasksSlice = createSlice({
  name: "tasks", // перший слот у назві action
  initialState: taskInitState, // Початкові дані для програми
  reducers: {
    addTask: {
      prepare: (text) => {
        return {
          payload: {
            text,
            id: uuidv4(),
            completed: false,
          },
        };
      },

      reducer: (state, action) => {
        return [...state, action.payload];
      },
    },

    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },

    toggleCompleted(state, action) {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      });
    },
  },
});

// action.js
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

// reducer.js
export const taskReducer = tasksSlice.reducer;
