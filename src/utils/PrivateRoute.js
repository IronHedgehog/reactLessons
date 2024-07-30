import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const PrivateRoute = ({ element: Component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
