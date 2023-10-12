// import "./Alert.css";
import "./Alert.scss";

import s from "./Alert.module.css";

import clsx from "clsx";

const alertStyles = {
  padding: 20,
  margin: "12em 20rem",
  color: "yellow",
  backgroundColor: "blue",
};

const getBgColor = (type) => {
  switch (type) {
    case "ok":
      return "green";
    case "warning":
      return "orange";
    case "error":
      return "red";
    default:
    //   throw new Error(`Unsupported type - {type}`);
  }
};

const Alert = ({ children, type, border }) => {
  return (
    <>
      <p style={{ ...alertStyles, backgroundColor: getBgColor(type) }}>
        {children}
      </p>
      <p className={clsx("alert", type, border && "border")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
        possimus consequuntur sit ex earum? Atque quos magnam, facere nesciunt
        aut nobis odit similique consequuntur veniam voluptate rem ab modi enim.
      </p>
      <p className={s.alert}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
        minima!{" "}
      </p>
    </>
  );
};
export default Alert;
