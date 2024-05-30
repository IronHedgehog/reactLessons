import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filterSlice";
import { taskReducer } from "./slice";
// Створення загального стору в який ми передали загальний стейт та підключення девтулзів

const taskPersistConfig = {
  key: "tasks",
  storage, // підключення до локалстореджу
  // blacklist: ["filter"], щоб виключити поле (не записувати)
  whitelist: ["tasks"], //вказуємо тільки те що записувати треба
};

export const store = configureStore({
  reducer: {
    tasks: persistReducer(taskPersistConfig, taskReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
