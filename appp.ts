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

createError("error", 400);

//налаштуєм компілятор
// працювати з класами
