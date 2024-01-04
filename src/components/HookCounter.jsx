import { useEffect, useState } from "react";

// ХУКИ ЗАВЖДИ ПИШУТЬСЯ НА ВЕРХНЬОМУ(першому) РІВНІ ВАШИХ ФУНКЦІОНАЛЬНИХ КОМПОНЕНТІВ
const HookCounter = () => {
  // hook = то є звичайна функція
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
  // useEffect(() => {
  //   // document.title = `Ви клікнули ${counter} кількість разів`;
  //   console.log(counter + secondValue);
  // }, [counter, secondValue]);

  useEffect(() => {
    // return у useEffect  дає можливість відпрацювати за елемент життевого циклу componentWillUnmount
    //    componentWillUnmount(){

    // }
    console.log("mount");

    console.log("didUpdate ,:", counter + secondValue);
    return () => {
      console.log("componentWillUnmount return");
    };
  }, [counter, secondValue]);

  return null;
  // (
  //   <>
  //     <button onClick={() => setSecondValue(secondValue - 1)}> - </button>
  //     <span>{counter}</span>
  //     <span>{secondValue}</span>
  //     <button onClick={() => setCounter(counter + 1)}> + </button>
  //   </>
  // );
};

export default HookCounter;
