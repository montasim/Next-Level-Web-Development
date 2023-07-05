"use strict";
// primitive types
// string
// number
// boolean
// null
// undefined
let stringTypeVariable = 'This is a string';
let numberTypeVariable = 1234567890;
let booleanTypeVariable = true;
let nullTypeVariable = null;
let undefinedTypeVariable = undefined;
//stringTypeVariable = 5555; // Type 'number' is not assignable to type 'string'.
stringTypeVariable.charAt(1);
console.log(stringTypeVariable);
// implicit types of typescript or inference
// when typescript automatically understand the type of the declared variable is known as the implicit types
const implicitTypesVariable = 'This is a implicit stype variable';
console.log(implicitTypesVariable);
// any type of tpescript
let anyTypeVariable;
