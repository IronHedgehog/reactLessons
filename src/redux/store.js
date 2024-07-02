// import { configureStore } from "@reduxjs/toolkit";
// import { taskReducer } from "./tasks/tasksSlice";

import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { tasksAPI } from "./tasks/sliceRTK";

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    [tasksAPI.reducerPath]: tasksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tasksAPI.middleware,
  ],
});

// Слухач події, як тіки відбувається якась подія під яку заточена наша API  буде тригеритись та діспатчити цю подію
setupListeners(store.dispatch);
