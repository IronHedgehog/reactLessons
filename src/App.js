import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Partfolio } from "./pages/Partfolio";
import { Studio } from "./pages/Studio";

const App = () => {
  const [mainPage, setMainPage] = useState(true);

  // Відображення сторінок
  return (
    <>
      <Header />
      <button onClick={(e) => setMainPage(!mainPage)}>
        Перейти доо мого партфоліо
      </button>

      {/*Routes - компонент який буде вміщувати в себе всі можливі розгалудженні(маршрути), Обовʼязковий навіть якщо у вас один маршрут  */}
      <Routes>
        {/* path="/"  = стартова сторінка */}
        {/* element={<Studio />} - Компонент який буде відображуватись якщо користувач потрапить на данний роут  */}
        {/* path="*" - БУДЬ що  Що не прописано в роутингу */}
        {/* :id - означає динамічний параметр,іменування може бути довільним має будь описовим та зрозумілим */}
        <Route path="/" element={<Studio />} />
        <Route path="/partfolio" element={<Partfolio />} />
        <Route path="/partfolio/:id" element={<Partfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
