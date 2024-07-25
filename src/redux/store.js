// import { configureStore } from "@reduxjs/toolkit";
// import { taskReducer } from "./tasks/tasksSlice";

import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { tasksAPI } from "./tasks/sliceRTK";

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer,
//   },
// });

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [tasksAPI.reducerPath]: tasksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    tasksAPI.middleware,
  ],
});

// Слухач події, як тіки відбувається якась подія під яку заточена наша API  буде тригеритись та діспатчити цю подію
setupListeners(store.dispatch);
export const persistedStore = persistStore(store);
