var input1 = document.getElementById("number1");
// const input1 = document.getElementById("number1")! as HTMLDivElement;
var input2 = document.getElementById("number2");
// ! - "Я програміст, я програмував цей код, Я ТОЧНО ВПЕВНЕНИЙ, ЩО ЦЯ КНОПКА БУДЕ ТУТ"
var button = document.getElementById("submit");
function add(num1, num2) {
    return num1 + num2;
}
// if (button) {
//   button.addEventListener("click", () => {});
// }
// ? - запитання до ts чи є дійсно кнопка? Якщо нема то не виконуй код далі
// button?.addEventListener("click", () => {});
var getSum = function (number1, number2) {
    return number1 + number2;
};
button.addEventListener("click", function () {
    console.log(getSum(Number(input1.value), +input2.value));
    //   console.log(input1.value + input2.value);
});
// ПРОСТІ(СКАЛЯРНІ) - це прості типи які містять у собі одне значення
// string, number, boolean, null,undefined,bigInt,symbol
// const - ніколи не змінюється
// let - let змінюється, ми можемо його переписувати
var number = 10;
// let number4 = 0;
var number4;
var number2 = 1.5;
var number3 = -5;
var num;
var string;
var boolean;
var empty;
var undef;
num = 10;
string = "string";
boolean = true;
empty = null;
undef = undefined;
// якщо присвоюєте явно то можна не вказувати тип
var num1 = 10;
var str = "asd";
var bool = false;
function func(num, str, bool, empty) {
    if (num === void 0) { num = 100; }
    if (str === void 0) { str = "something"; }
    if (bool === void 0) { bool = false; }
}
// СКЛАДНІ ТИПИ
// OBJECT
// : string[] - ми очікуємо побачити у змінній arrString масив строк
var arrString;
arrString = ["hello", "world"];
var numberArr;
numberArr = [1, 2];
var anyArr;
anyArr = [1, undefined, null, "str"];
var arrObj;
arrObj = [
    { name: "Petro", age: 30 },
    // { num1: 1, ega: 33 },//ERR
];
// OBJECT
var obj = {};
// Приклад нище не пропустить лінтер
// const obj1: {} = {};
// ? - оператор який робить поле не обовʼязковим
var person = {
    name: "Petro",
    age: 30,
};
var data = {
    id: 1,
    price: 1000,
    title: "Potato",
    desc: "nice potato",
};
// ТИПИ ЯКИХ НЕМА В JS
// tuple,custom types,never,void,unknowns,Enum,
