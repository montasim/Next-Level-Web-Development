// arrow function
const addFunctionWithDefaultParameters = (number1: number = 10, number2: number = 20): number => number1 + number2;
const addTwoNumbersWithDefaultParameters = (number1: number = 10, number2: number): number => number1 + number2;
const addTwoNumbers2WithDefaultParameters = (number1: number = 10, number2?: number): number => number1 + (number2 ?? 0);

console.log(addFunctionWithDefaultParameters());
console.log(addFunctionWithDefaultParameters(30, 50));
console.log(addFunctionWithDefaultParameters( 50));
// console.log(addTwoNumbersWithDefaultParameters( 60)); // will not work
console.log(addTwoNumbers2WithDefaultParameters( 60));

// always use the default value to the last parameter