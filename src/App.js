import { createContext, useContext } from "react";
import CongradulationsMessage from "./components/congradulationsMessage/CongradulationsMessage";
import UserList from "./components/userList/UserList";
import { useMyContext } from "./hooks/myContext";
import { user } from "./index";

function App() {
  const appContext = createContext("Test");
  const contextValue = useContext(user);
  const { nickname } = useMyContext();
  return (
    <>
      <p>{nickname}</p>
      <UserList />
      <CongradulationsMessage />
    </>
  );
}

export default App;
