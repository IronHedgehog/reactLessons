import { createContext, useContext, useEffect, useRef } from "react";
import Buttons from "./components/button/Buttons";
import Player from "./components/player/Player";
import { useUserContext } from "./hooks/myContext";
import { user } from "./index";

function App() {
  const buttonRef = useRef();
  const appContext = createContext("Test");
  const contextValue = useContext(user);
  const { nickname } = useUserContext();

  // useRef() -
  const btnRef = useRef();
  // btnRef.current = undefined на першому рендері
  // другий третій 4 рендер завжди буде кнопка
  // console.log(btnRef.current);
  useEffect(() => {
    // ефект відпрацьовує після монутвання усіх компонентів
    // Будемо завжди отримувати посилання на елемент
    // console.log(btnRef.current);
    buttonRef.current.focus();
  }, []);

  const click = (e) => {
    console.log(btnRef.current);
  };

  return (
    <>
      <Buttons ref={buttonRef}>Forward ref</Buttons>

      <p>{nickname}</p>
      <button onClick={click} ref={btnRef}>
        Button with ref
      </button>
      <Player source={"http://media.w3.org/2010/05/sintel/trailer.mp4"} />
      {/* <UserList/>
      <CongradulationsMessage /> */}
    </>
  );
}

export default App;
