"use strict";
let emni;
emni = 'Next Level Web Development';
emni.toUpperCase();
function kgToGram(param) {
    if (typeof param === 'string') {
        param = parseInt(param);
        return `The Converted Value is ${param * 1000} Gram`;
    }
    else if (typeof param === 'number') {
        return `The Converted Value is ${param * 1000} Gram`;
    }
    else {
        return `Unsuported Type`;
    }
}
const resultToBeString = kgToGram('100');
// const resultToBeString = kgToGram('100') as number; // typescript will not show error for type assertion
const resultToBeNumber = kgToGram(100);
const resultToBeUndefined = kgToGram(undefined); // another way of type assertion
console.log(resultToBeString);
console.log(resultToBeNumber);
console.log(resultToBeUndefined);
try {
}
catch (error) {
    console.log(error.message);
}
