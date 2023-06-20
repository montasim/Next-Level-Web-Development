"use strict";
// when a function is being used inside of an object is called method
const objectWithMethod = {
    name: 'Shuvo',
    balance: 10000,
    addBalance(money) {
        return `My New Balance: ${this.balance + money}`;
    }
};
