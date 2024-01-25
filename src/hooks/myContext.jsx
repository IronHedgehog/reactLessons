import { createContext, useContext, useState } from "react";

export const userContext = createContext();

export const useUserContext = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  // false = false,null,undefined,NaN,"",0
  const [nickName, setNickName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    setNickName("ADMIN");
  };
  const logOut = () => {
    setIsLoggedIn(false);
    setNickName(null);
  };

  return (
    <userContext.Provider value={{ isLoggedIn, nickName, login, logOut }}>
      {children}
    </userContext.Provider>
  );
};
