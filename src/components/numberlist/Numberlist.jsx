import React from "react";
import Numberlistitem from "./numberlistItem/Numberlistitem";

const Numberlist = ({ data, deletePhone }) => {
  return (
    <ul>
      {data.map(({ id, name, phone }) => {
        return (
          <Numberlistitem
            key={id}
            name={name}
            number={phone}
            deletePhone={deletePhone}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default Numberlist;

// rafce
