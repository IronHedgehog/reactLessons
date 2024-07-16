import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import TaskPage from "./pages/TasksPage";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    // Публічний шлях
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route
        path="/tasks"
        element={<PrivateRoute element={<TaskPage />} redirectedTo="/" />}
      ></Route>
    </Routes>
  );
};

export default App;
