"use strict";
// normal function
function addNumbersNormalFunction(number1, number2) {
    return number1 + number2;
}
// arrow function
const addNumbersArrowFunction = (number1, number2) => number1 + number2;
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// callback function
const squareCallbackFunction = arrayOfNumbers === null || arrayOfNumbers === void 0 ? void 0 : arrayOfNumbers.map((number) => number * number);
const qubeCallbackFunction = arrayOfNumbers === null || arrayOfNumbers === void 0 ? void 0 : arrayOfNumbers.map((number) => number * number * number);
console.log(addNumbersNormalFunction(1, 2));
console.log(addNumbersArrowFunction(10, 20));
console.log(squareCallbackFunction);
console.log(qubeCallbackFunction);
