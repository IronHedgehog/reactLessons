import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { LoginPage } from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import StartPage from "./pages/StartPage";
import TaskPage from "./pages/TasksPage";
import PrivateRoute from "./utils/PrivateRoute";
import RestrictedRoute from "./utils/RestrictedRoute";

const App = () => {
  return (
    // Публічний шлях
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/signUp"
          element={<RestrictedRoute element={<SignUp />} redirectTo="/" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute element={<LoginPage />} redirectTo="/" />}
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute element={<TaskPage />} redirectedTo="/login" />
          }
        />
      </Routes>
    </>
  );
};

export default App;
