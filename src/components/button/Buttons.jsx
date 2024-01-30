import { forwardRef } from "react";

const Buttons = forwardRef((props, ref) => {
  return <button ref={ref}>{props.children}</button>;
});

export default Buttons;
