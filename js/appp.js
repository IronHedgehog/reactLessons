"use strict";
function getPlus(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        console.log(param1 + param2);
    }
    else {
        console.log(param1 + "," + param2);
    }
}
getPlus("Elena", "Oleg");
getPlus(1, 2);
const product = {
    id: 10,
    details: {
        title: "Milk",
        description: "superMilk",
    },
    price: "5$",
};
function greetings(action) {
    if (action === "hello") {
        console.log(action);
    }
    else {
        console.log(action);
    }
}
greetings("hello");
function createError(message, status) {
    throw { message, status };
}
function logger(message) {
    console.log(message);
}
function sum(num1, num2) {
    let sum = num1 + num2;
}
logger("asd");
sum(2, 2);
let nothing = null;
function throwErr(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
throwErr("asdasd");
function doNothing() {
    return;
}
function failAlways() {
    throw new Error("This func always fails");
}
