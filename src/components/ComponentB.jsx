import React from "react";
import { useToggle } from "../hooks/useToggle";
import Modal from "./Modal";

const ComponentB = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>ComponentB</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentB;
