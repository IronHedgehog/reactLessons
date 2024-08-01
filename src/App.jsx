import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { LoginPage } from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import StartPage from "./pages/StartPage";
import TaskPage from "./pages/TasksPage";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./utils/PrivateRoute";
import RestrictedRoute from "./utils/RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Почекайте, оновлюємо юзера</h1>
  ) : (
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
  // Публічний шлях
};

export default App;
