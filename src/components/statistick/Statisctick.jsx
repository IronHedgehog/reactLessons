import React from "react";

const Statisctick = (props) => {
  return (
    <>
      <p>Good: {props.good}</p>
      <p>Neutral:{props.neutral}</p>
      <p>Bad:{props.bad}</p>
      <p>Total:{props.total}</p>
      <p>PositivePercentage: {props.positive}% </p>
    </>
  );
};

export default Statisctick;

// rafce
