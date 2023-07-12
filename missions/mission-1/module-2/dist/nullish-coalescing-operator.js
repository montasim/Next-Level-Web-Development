"use strict";
var _a, _b;
const isAuthenticatedUser = undefined;
const isAuthenticatedUser2 = '';
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest User';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest User';
const userName3 = isAuthenticatedUser2 !== null && isAuthenticatedUser2 !== void 0 ? isAuthenticatedUser2 : 'Guest User';
const userName4 = isAuthenticatedUser2 ? isAuthenticatedUser2 : 'Guest User';
console.log(userName);
console.log(userName2);
console.log(userName3);
console.log(userName4);
const manush1 = {
    name: 'Montasim',
    age: 22,
    address: {
        city: 'No City',
        road: 'No Road',
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home';
console.log(home);
