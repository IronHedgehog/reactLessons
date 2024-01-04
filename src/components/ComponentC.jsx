import React from "react";
import { useToggle } from "../hooks/useToggle";
import Modal from "./Modal";

const ComponentC = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>ComponentA</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentC;
