"use strict";
const a = 'age';
const b = 'age';
// use of keyof
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: 'John', age: 30 }, 'name');
// using keyof we can force or constrains a generic type to another generic type
