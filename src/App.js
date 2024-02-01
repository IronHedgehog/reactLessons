import { useMemo, useState } from "react";

const App = ({ someProp }) => {
  // Причини ререндеру компоненту(ОСНОВНІ)
  // 1)Якщо змінюються пропси
  // 2)Якщо змінюється стейт

  // Список планет
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  // Пошуковий запит користувача
  const [query, setQuery] = useState("V");
  const [click, setClick] = useState(0);
  // useMemo() - повертає значення яке запамʼятав
  // useMemo - це хук для оптимізації та запамʼятовування якихось великих данних
  // Завжди масив повертає
  // useMemo() -  для великих обсягів інформації

  const filterPlanet = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );

  // const memoryTest = useMemo(() => first, [second]);

  console.log(filterPlanet);
  return (
    <>
      <button onClick={() => setClick(click + 1)}>{click}</button>
      <div>
        {filterPlanet.map((planet) => (
          <div key={planet}>{planet}</div>
        ))}
      </div>
    </>
  );
};

export default App;
