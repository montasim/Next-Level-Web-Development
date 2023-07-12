"use strict";
// arrow function
const createArray = (param) => {
    return [param];
};
// generic tuple function
const createArrayTupleFunction = (param1, param2) => {
    return [param1, param2];
};
const createArray2 = (param) => {
    return [param];
};
const result = createArray("John");
const result2 = createArray2("John");
const result3 = createArray2(true);
const result4 = createArray2({ name: "John", age: 30 });
const result5 = createArrayTupleFunction("John", 30);
// spread operator
const crush = 'Kate Winslet';
const myInfo = {
    name: 'John Doe',
    age: 30,
    salary: 30000,
};
const newData = Object.assign(Object.assign({}, myInfo), { crush });
// generic arrow function
const addMeIntoMyCrushMind = (myInfo) => {
    const crush = 'Kate Winslet';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
// generic normal function
function addMeIntoMyCrushMind2(myInfo) {
    const crush = 'Kate Winslet';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
}
;
const result6 = addMeIntoMyCrushMind(myInfo);
result6.name;
