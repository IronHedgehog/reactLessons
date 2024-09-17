// union type

// union - обʼєдання двох типів в одній змінній
// Ми хочемо навчити нашу функцію додавання правильно додавати строки та числа одночасно
// param1 - string або число
//  type | type - синтаксис union type
function getPlus(param1: string | number, param2: string | number) {
  // Навчили програму працювати з числами
  if (typeof param1 === "number" && typeof param2 === "number") {
    console.log(param1 + param2);
  } else {
    console.log(param1 + "," + param2);
  }
  // Навчили програму працювати з строками
  //   if (typeof param1 === "string" && typeof param2 === "string") {
  //   console.log(param1 + " " + param2);
  //   }
}

getPlus("Elena", "Oleg");
getPlus(1, 2);

// custom types

type productType = {
  id: number;
  details: {
    title: string;
    description?: string;
  };
  price: string;
};

const product: productType = {
  id: 10,
  details: {
    title: "Milk",
    description: "superMilk",
  },
  price: "5$",
};

// literal types

// let literal: "first" | "second";

function greetings(action: "hello" | "bye") {
  if (action === "hello") {
    console.log(action);
  } else {
    console.log(action);
  }
}

greetings("hello");

//RETURN TYPE - описує, що наша функція відпускає у зовнішній код
// void
// NEVER - коли функція ніколи не закінчується та нічого не повертає
// зустрічається при обробці помилок

//throw
function createError(message: string, status: number): never {
  throw { message, status };
}

// createError("error", 400);

//налаштуєм компілятор
// працювати з класами

// void - використовується в тому випадку якщо ми хочемо позначити відсутність будь-якого типу

// функція з типом повернення void може повертати undefined або не мати оператора return
// змінні типу void можуть містити лише null та undefined без додаткових налаштувань
// (strictNullChecks)
function logger(message: string): void {
  // clg - не має жодного типу
  console.log(message);
}

function sum(num1: number, num2: number) {
  // Данна функція нічого не повертає тому ретурн тайп буде void
  let sum = num1 + num2;
}

logger("asd");
sum(2, 2);

let nothing: void = null;

// NEVER

// never - представляє тип значень, які ніколи не відбуваються.

// 1) функції які видають помилки

function throwErr(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

throwErr("asdasd");

function doNothing(): void {
  return;
}

function failAlways(): never {
  throw new Error("This func always fails");
}

// never - підтип кожного типу(дуже специфічний тип даних)

// жоден тип не є підтипом never
