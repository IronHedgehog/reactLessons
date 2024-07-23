import { NavLink } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false;
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
