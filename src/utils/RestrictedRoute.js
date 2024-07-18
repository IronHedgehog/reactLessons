import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ element: Component, redirectTo = "/" }) => {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
