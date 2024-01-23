import React from "react";
import { useMyContext } from "../../hooks/myContext";
const CongradulationsMessage = () => {
  const { nickname } = useMyContext();
  return <div>{nickname}</div>;
};

export default CongradulationsMessage;
