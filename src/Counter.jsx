import { useEffect, useRef } from "react";

const Counter = () => {
  const valueRef = useRef(0);

  useEffect(() => {
    console.log(valueRef.current);
  }, [valueRef]);

  const click = (e) => {
    console.log(e);
    valueRef.current += 1;
  };
  return <button onClick={click}>Оновлення значення</button>;
};

export default Counter;
