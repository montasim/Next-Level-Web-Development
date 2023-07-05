"use strict";
var Grade;
(function (Grade) {
    Grade[Grade["junior"] = 0] = "junior";
    Grade[Grade["mid"] = 1] = "mid";
    Grade[Grade["senior"] = 2] = "senior";
})(Grade || (Grade = {}));
var Grade2;
(function (Grade2) {
    Grade2["junior"] = "junior";
    Grade2["mid"] = "mid";
    Grade2["senior"] = "senior";
})(Grade2 || (Grade2 = {}));
const rahim = {
    name: 'Rahim',
    age: 25,
    grade: 1
};
const rahima = {
    name: 'Rahim',
    age: 25,
    grade: Grade.senior
};
