import { App } from "components/App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { persistor, store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={<h1>ЗАВАНТАЖЕННЯ</h1>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
