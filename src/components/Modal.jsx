import React from "react";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <>
          <div>Modal</div>
          <button onClick={onClose}>CLOSE</button>
        </>
      )}
    </>
  );
};

export default Modal;
