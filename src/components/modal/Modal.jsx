import { Component } from "react";
import { createPortal } from "react-dom";
// Отримали доступ до Статичного hTML div
const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.portalContainer = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.portalContainer);
    document.body.style.overflowY = "hidden";
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.portalContainer);
    document.body.style.overflowY = "visible";
  }

  render() {
    //   this.props.children - все що передадуть при рендері компоненту
    return createPortal(this.props.children, this.portalContainer);
  }
}

export default Modal;
