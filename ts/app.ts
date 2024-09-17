const input1 = document.getElementById("number1")! as HTMLInputElement;
// const input1 = document.getElementById("number1")! as HTMLInputElement;
const input2 = document.getElementById("number2")! as HTMLInputElement;
// ! - "Я програміст, я програмував цей код, Я ТОЧНО ВПЕВНЕНИЙ, ЩО ЦЯ КНОПКА БУДЕ ТУТ"
const button = document.getElementById("submit")! as HTMLButtonElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// if (button) {
//   button.addEventListener("click", () => {});
// }
// ? - запитання до ts чи є дійсно кнопка? Якщо нема то не виконуй код далі
// button?.addEventListener("click", () => {});

const getSum = (number1: number, number2: number) => {
  return number1 + number2;
};

button.addEventListener("click", () => {
  console.log(getSum(Number(input1.value), +input2.value));
  //   console.log(input1.value + input2.value);
});
// ПРОСТІ(СКАЛЯРНІ) - це прості типи які містять у собі одне значення
// string, number, boolean, null,undefined,bigInt,symbol

// const - ніколи не змінюється
// let - let змінюється, ми можемо його переписувати
const number = 10;

// let number4 = 0;
let number4: number;

const number2 = 1.5;

const number3 = -5;

let num: number;
let string: string;
let boolean: boolean;
let empty: null;
let undef: undefined;

num = 10;
string = "string";
boolean = true;
empty = null;
undef = undefined;
// якщо присвоюєте явно то можна не вказувати тип
const num1 = 10;
const str = "asd";
const bool = false;

function func(num = 100, str = "something", bool = false, empty: null) {}

// СКЛАДНІ ТИПИ
// OBJECT
// : string[] - ми очікуємо побачити у змінній arrString масив строк
// let arrString: string[];

arrString = ["hello", "world"];

let numberArr: number[];
numberArr = [1, 2];

let anyArr: any[];

anyArr = [1, undefined, null, "str"];

let arrObj: { name: string; age: number }[];

arrObj = [
  { name: "Petro", age: 30 },
  // { num1: 1, ega: 33 },//ERR
];

// OBJECT

const obj = {};
// Приклад нище не пропустить лінтер
// const obj1: {} = {};
// ? - оператор який робить поле не обовʼязковим
const person: { name: string; age: number; email?: string } = {
  name: "Petro",
  age: 30,
};

const data: { id: number; price: number; title: string; desc: string } = {
  id: 1,
  price: 1000,
  title: "Potato",
  desc: "nice potato",
};

// ТИПИ ЯКИХ НЕМА В JS

// tuple,custom types,never,void,unknowns,Enum,any

// ANY - будь-який тип
// Намагаємось уникати!
// any - зміна в яку ми можемо скласти будь-що (Порівняння з JS)

let any: any;

any = 10;

any = "false";

any = "funny";

any = false;

any = [];

any = {};

let some: any;

some = [];

let number34: number;

num = some;

// UNKNOWN
// Any  з додатковою перевіркою

let some1: unknown;

some1 = "asd";

let string12 = "asd";

if (typeof some1 === "string") {
  string12 = some1;
}

// Tuple - кортеж
//Фіксує розмір
// Фіксує типи

let fixed: [string, number];

fixed = ["asd", 1];
// fixed = [1, "asd"];

fixed.push("false", 0, 10, "50", "100000", "asd");

console.log(fixed);

// ENUM
// Паттерн
// Настільки популярний,що під нього створили у TS окремий тип даних

// Всі значення які ви пишете в ENUM прирівнюються до числових значень починаючи з 0
enum Roles {
  // Гарним тоном є прописувати змінну в ENUM великими буквами
  ADMIN,
  USER,
}

const person1 = {
  role: Roles.ADMIN,
};

if (person1.role === Roles.ADMIN) {
  console.log("role :", Roles.ADMIN);
}
