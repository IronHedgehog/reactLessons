import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Modal from "../modal/Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenFunc = () => {
    setOpenModal(true);
  };

  const modalCloseFunc = () => {
    setOpenModal(false);
  };

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
            <>
              <li>
                <NavLink to={"/tasks"}>tasks</NavLink>
              </li>
            </>
          )}

          <li>
            <button onClick={modalOpenFunc}>Open modal</button>
          </li>
          {openModal && (
            <Modal>
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "500px",
                  height: "500px",
                  zIndex: "1000",
                  backgroundColor: "green",
                }}
              >
                <button onClick={modalCloseFunc}>Close modal</button>
                <h2>MODAL</h2>
                <h2>MODAL</h2>
                <h2>MODAL</h2>
                <h2>MODAL</h2>
                <h2>MODAL</h2>
              </div>
            </Modal>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
