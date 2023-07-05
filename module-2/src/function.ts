// normal function
function addNumbersNormalFunction(number1: number, number2: number) {
    return number1 + number2;
}

// arrow function
const addNumbersArrowFunction = (number1: number, number2: number): number => number1 + number2;

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// callback function
const squareCallbackFunction: number[] = arrayOfNumbers?.map((number: number): number => number * number);
const qubeCallbackFunction: number[] = arrayOfNumbers?.map((number: number): number => number * number * number);

console.log(addNumbersNormalFunction(1, 2));
console.log(addNumbersArrowFunction(10, 20));
console.log(squareCallbackFunction);
console.log(qubeCallbackFunction)