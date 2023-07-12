"use strict";
// generic means generalize
const rollNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rollNumber2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// use angle brackets instead of square brackets
const rollNumber3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rollNumber4 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const userNameAndRollNumber = [
    { name: "John", roll: 1 },
    { name: "Doe", roll: 2 },
];
// using generic type
const rollNumber5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rollNumber6 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const rollNumber7: GenericArrayType2<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // error
// const rollNumber8: GenericArrayType2<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // error
const userNameAndRollNumber2 = [
    { name: "John", roll: 1 },
    { name: "Doe", roll: 2 },
];
// using generic tuple
const relation = ["John", 1];
const relationWithSalary = [
    { name: "John", salary: 1 },
    'John',
];
// using generic tuple is not best practice
const relationWithSalary2 = [
    { profession: "Service Holder", age: 30 },
    'John',
];
// to solve the generic tuple problem define object structure
const relationWithSalary3 = [
    { name: "John", salary: 30000 },
    'John',
];
const relationWithSalary4 = [
    { name: "John", salary: 30000 },
    'John',
];
