import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink to={"/"}>Phonebook</NavLink>
      <nav>
        <ul>
          {isLoggedIn === false ? (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          ) : (
            <></>
          )}
          {isLoggedIn === false ? (
            <li>
              <NavLink to={"/signUp"}>SignUp</NavLink>
            </li>
          ) : (
            <></>
          )}

          {isLoggedIn === false ? (
            <></>
          ) : (
            <li>
              <NavLink to={"/tasks"}>tasks</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
