import React from "react";

const Numberlistitem = ({ name, number, deletePhone, id }) => {
  console.log(number);
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={(e) => console.log(e)}>
        Видалити
      </button>
    </li>
  );
};

export default Numberlistitem;
