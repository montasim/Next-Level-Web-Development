"use strict";
const myInfo2 = {
    name: 'John Doe',
    age: 30,
    salary: 30000,
};
// generic arrow function
const addMeIntoMyCrushMind3 = (myInfo) => {
    const crush = 'Kate Winslet';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result7 = addMeIntoMyCrushMind(myInfo);
result7.name;
