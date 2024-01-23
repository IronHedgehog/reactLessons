import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyContext } from "./hooks/myContext";
import "./index.css";

export const user = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Provider - дозволяє вам підписатись на оновлення контексту */}
    <MyContext.Provider value={{ nickname: "Petro" }}>
      <App />
    </MyContext.Provider>
  </React.StrictMode>
);
