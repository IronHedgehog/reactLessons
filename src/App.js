import { createContext, useContext, useEffect, useRef } from "react";
import Counter from "./Counter";
import CongradulationsMessage from "./components/congradulationsMessage/CongradulationsMessage";
import UserList from "./components/userList/UserList";
import { useUserContext } from "./hooks/myContext";
import { user } from "./index";

function App() {
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
  }, []);

  const click = (e) => {
    console.log(btnRef.current);
  };

  return (
    <>
      <p>{nickname}</p>

      <button onClick={click} ref={btnRef}>
        Button with ref
      </button>
      <Counter />
      <UserList />
      <CongradulationsMessage />
    </>
  );
}

export default App;
