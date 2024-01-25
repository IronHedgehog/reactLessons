import React from "react";
import { useUserContext } from "../../hooks/myContext";

const UserList = () => {
  const { nickName } = useUserContext();
  return (
    <div>
      {nickName && <p> Привіт,{}</p>}
      {nickName ? <button>LogOut</button> : <button>LogIn</button>}
    </div>
  );
};

export default UserList;
