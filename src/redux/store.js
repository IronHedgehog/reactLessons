import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { getArticles } from "../services/articlesServices";
import { rootReducer } from "./reducer";

const persistConfig = {
  key: "products",
  storage,
};

const persistReducerr = persistReducer(persistConfig, rootReducer);

// const middleware = (store) => (next) => (action) => {
//   console.log(action);
//   if (typeof action === "function") {
//     action(store.dispatch);
//   }
//   return next(action);
// };

export const getArticlesThunk = () => async (dispatch) => {
  dispatch({ type: "setArtclesLoading" });
  try {
    const data = await getArticles();
    dispatch({ type: "setArticlesSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "setArticlesError", payload: error });
  }
};

export const store = createStore(
  persistReducerr,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
