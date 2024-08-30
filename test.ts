// string,number,boolean,null,undefined,bigInt,symbol,object

// : прописуєм типи
//  типи пишуться з малої літери
// весь ts код який ви пишите в резльтати скомпилюється в звичайний js

function getSum(number1: number, number2: number): number {
  return number1 + number2;
}

// void,any
// void - пустота
// any - Будь-що (уникати)

function printResult(result: number): void {
  console.log(result);
}

printResult(getSum(5, 5));
// console.log();

// tsc - typeScriptCompiler

// Опис простих типів

// Не потрібно вказувати тип даних, якщо ти передаєш його явно
const number1 = "A";

let a = getSum(3, 3);
let number = 10;

number = 40;

const string: string = "abc";
let string1 = "qwe";

let arrString: string[];
arrString = ["one", "shocm"];
