import React from "react";
import { useMyContext } from "../../hooks/myContext";

const UserList = () => {
  const { nickname } = useMyContext();
  console.log(nickname);
  return (
    <ul>
      <li>{nickname}</li>
    </ul>
  );
};

export default UserList;
