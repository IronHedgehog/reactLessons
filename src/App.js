import React from "react";
import HookCounter from "./components/HookCounter";

const App = () => {
  return (
    <>
      <h1>План на заняття</h1>
      <ol>
        <li>Шо за хуки?</li>
        <li>
          <p>Хук дозволяє підчипити якийсь стан компонента</p>
        </li>
        <li>useState</li>
        <li>useEffect unmount</li>
        <li>customHooks</li>
        <li>useMemo</li>
        <li>useCallback</li>
      </ol>
      <HookCounter />
    </>
  );
};

export default App;
