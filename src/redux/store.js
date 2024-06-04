import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filterSlice";
import { taskReducer } from "./slice";

const persistConfig = {
  key: "tasks", // ключ за яким зберігається в локал сторедж
  storage, // підключення до вебсховища(локалсторадж)
  // blacklist: ["filter"], // відповідає за те що видалити та не додавати в локалсторадж
  whitelist: ["tasks"], // відповідає з ате які поля зберігати в локалсторадж
};

// Комбінація редюсерів
const reducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer,
});
// налаштування персісту, які поля запамʼятовувати, з яким редюсером працювати
const persistedReducer = persistReducer(persistConfig, reducer);
// configureStore - ми з вами створили стор
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
