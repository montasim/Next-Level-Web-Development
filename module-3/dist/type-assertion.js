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
const resultToBeNumber = kgToGram(100);
const resultToBeUndefined = kgToGram(undefined);
console.log(resultToBeString);
console.log(resultToBeNumber);
console.log(resultToBeUndefined);
try {
}
catch (error) {
    console.log(error.message);
}
