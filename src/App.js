import React from "react";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

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
        <li>
          unmount useEffect окреме використаня useEffect для кожного життевого
          циклу
        </li>
        <li>customHooks = Власні хуки</li>
        <li>useMemo</li>
        <li>useCallback</li>
      </ol>
      {/* <HookCounter /> */}
      {/* <NewComponent /> */}
      <ComponentB />
      <ComponentC />
    </>
  );
};

export default App;
