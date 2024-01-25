import React from "react";
import { useUserContext } from "../../hooks/myContext";
const CongradulationsMessage = () => {
  const { nickname } = useUserContext();
  return <div>{nickname}</div>;
};

export default CongradulationsMessage;
