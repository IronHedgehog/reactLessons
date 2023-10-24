import React from "react";
import Numberlistitem from "./numberlistItem/Numberlistitem";

const Numberlist = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, name, phone }) => {
        return <Numberlistitem key={id} name={name} number={phone} />;
      })}
    </ul>
  );
};

export default Numberlist;

// rafce
