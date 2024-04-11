import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    //   NavLink === Link  одна різниця у тому що на навлінк поточний додається клас актів який можна додатково підстилювати
    <nav>
      <Link to="/">s</Link>
      <NavLink to="/">Studio</NavLink>
      <NavLink to="/partfolio">Partfolio</NavLink>
    </nav>
  );
};

export default Header;
