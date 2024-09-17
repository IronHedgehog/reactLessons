"use strict";
const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const button = document.getElementById("submit");
function add(num1, num2) {
    return num1 + num2;
}
const getSum = (number1, number2) => {
    return number1 + number2;
};
button.addEventListener("click", () => {
    console.log(getSum(Number(input1.value), +input2.value));
});
const number = 10;
let number4;
const number2 = 1.5;
const number3 = -5;
let num;
let string;
let boolean;
let empty;
let undef;
num = 10;
string = "string";
boolean = true;
empty = null;
undef = undefined;
const num1 = 10;
const str = "asd";
const bool = false;
function func(num = 100, str = "something", bool = false, empty) { }
arrString = ["hello", "world"];
let numberArr;
numberArr = [1, 2];
let anyArr;
anyArr = [1, undefined, null, "str"];
let arrObj;
arrObj = [
    { name: "Petro", age: 30 },
];
const obj = {};
const person = {
    name: "Petro",
    age: 30,
};
const data = {
    id: 1,
    price: 1000,
    title: "Potato",
    desc: "nice potato",
};
let any;
any = 10;
any = "false";
any = "funny";
any = false;
any = [];
any = {};
let some;
some = [];
let number34;
num = some;
let some1;
some1 = "asd";
let string12 = "asd";
if (typeof some1 === "string") {
    string12 = some1;
}
let fixed;
fixed = ["asd", 1];
fixed.push("false", 0, 10, "50", "100000", "asd");
console.log(fixed);
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
const person1 = {
    role: Roles.ADMIN,
};
if (person1.role === Roles.ADMIN) {
    console.log("role :", Roles.ADMIN);
}
