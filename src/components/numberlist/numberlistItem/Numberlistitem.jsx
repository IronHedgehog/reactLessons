import React from "react";

const Numberlistitem = ({ name, number }) => {
  console.log(number);
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

export default Numberlistitem;
