"use strict";
// arrow function
const addFunctionWithDefaultParameters = (number1 = 10, number2 = 20) => number1 + number2;
const addTwoNumbersWithDefaultParameters = (number1 = 10, number2) => number1 + number2;
const addTwoNumbers2WithDefaultParameters = (number1 = 10, number2) => number1 + (number2 !== null && number2 !== void 0 ? number2 : 0);
console.log(addFunctionWithDefaultParameters());
console.log(addFunctionWithDefaultParameters(30, 50));
console.log(addFunctionWithDefaultParameters(50));
// console.log(addTwoNumbersWithDefaultParameters( 60)); // will not work
console.log(addTwoNumbers2WithDefaultParameters(60));
// always use the default value to the last parameter
