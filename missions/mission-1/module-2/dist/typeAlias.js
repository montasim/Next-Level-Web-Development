"use strict";
const crushObject1 = {
    name: 'Karobi',
    age: 25,
    profession: 'Housewife',
    address: 'Rangpur',
};
const crushObject2 = {
    name: 'Sharmin',
    age: 25,
    profession: 'Housewife',
    address: 'Rangpur',
};
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(10, 20, (x, y) => x - y));
console.log(calculate(10, 20, (x, y) => x * y));
console.log(calculate(10, 20, (x, y) => x / y));
