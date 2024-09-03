// Скалярні типи даних
// string,number,boolean,null,undefined,bigInt,symbol,object
// : прописуєм типи
//  типи пишуться з малої літери
// весь ts код який ви пишите в резльтати скомпилюється в звичайний js
function getSum(number1, number2) {
    return number1 + number2;
}
// void,any
// void - пустота
// any - Будь-що (уникати)
function printResult(result) {
    console.log(result);
}
printResult(getSum(5, 5));
// console.log();
// tsc - typeScriptCompiler
// tsc --watch назва файлу
// Опис простих типів
// Не потрібно вказувати тип даних, якщо ти передаєш його явно
var number1 = "A";
var a = getSum(3, 3);
var number = 10;
number = 40;
var string = "abc";
var string1 = "qwe";
var arrString;
arrString = ["one", "shocm"];
