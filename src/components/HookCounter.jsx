import React, { useEffect, useState } from "react";

// ХУКИ ЗАВЖДИ ПИШУТЬСЯ НА ВЕРХНЬОМУ РІВНІ ВАШИХ ФУНКЦІОНАЛЬНИХ КОМПОНЕНТІВ
const HookCounter = () => {
  const [counter, setCounter] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  // Перша змінна = Значення Стану
  // Друга змінна це функція для оновлення цього Стану
  //В дужках useState = Початкове значення Стану

  // const [imgs, setImgs] = useState([]);
  // const [value, setValue] = useState("");

  // Приклад вище є добре
  //

  // ПРИКЛАД НИЩЕ Є ПОГАНО
  // const [state, setState] = useState({
  //   imgs: [],
  //   value: "",
  //   filter: "",
  // });

  // useEffect = хук який замінює нам методи життєвого циклу.(Mount, Update, Unmount)
  //  useEffect = функція яка приймає два параметра - це callback та залежності
  useEffect(() => {
    // document.title = `Ви клікнули ${counter} кількість разів`;
    console.log(counter + secondValue);
  }, [counter, secondValue]);

  return (
    <>
      <button onClick={() => setSecondValue(secondValue - 1)}> - </button>
      <span>{counter}</span>
      <span>{secondValue}</span>
      <button onClick={() => setCounter(counter + 1)}> + </button>
    </>
  );
};

export default HookCounter;
