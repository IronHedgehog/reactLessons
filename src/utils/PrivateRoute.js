import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, redirectTo = "/" }) => {
  const isAuth = false;
  return isAuth ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
