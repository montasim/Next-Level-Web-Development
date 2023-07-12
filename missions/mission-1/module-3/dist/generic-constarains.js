"use strict";
;
const myInfo2 = {
    name: 'John Doe',
    age: 30,
    salary: 30000,
};
const myInfo3 = {
    name: 'Rahim Mia',
    age: 50,
    salary: 50000,
};
// generic arrow function
const addMeIntoMyCrushMind3 = (myInfo) => {
    const crush = 'Kate Winslet';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result7 = addMeIntoMyCrushMind3(myInfo2);
const result8 = addMeIntoMyCrushMind3(myInfo3);
console.log(result7);
console.log(result8);
