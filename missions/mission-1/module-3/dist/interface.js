"use strict";
;
const userWithTypeAlias = {
    name: 'Type Alias',
    age: 20
};
userWithTypeAlias.age = 30;
const userWithInterface = {
    name: 'Interface',
    age: 200
};
userWithInterface.age = 300;
;
// extended interface
const userWithExtendedInterface = {
    name: 'Extended Interface',
    age: 40,
    role: 'admin'
};
userWithExtendedInterface.age = 50;
const userWithExtendedType = {
    name: 'Extended Type',
    age: 60,
    role: 'admin'
};
userWithExtendedType.age = 70;
// use type alias for function type because it looks more clean and readable
const addNumbersWithType = (number1, number2) => {
    return number1 + number2;
};
;
const addNumbersWithInterface = (number1, number2) => {
    return number1 + number2;
};
const rollNumbersArray = [1, 2, 3, 4, 5];
const rollNumbersArrayWithInterface = [1, 2, 3, 4, 5];
// when works with object use interface
// for others case use type alias
