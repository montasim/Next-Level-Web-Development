"use strict";
const greetFriendsFunction = (...friends) => friends === null || friends === void 0 ? void 0 : friends.forEach(friend => console.log(`Hello ${friend}`));
const greetFriendsFunction2 = (...friends) => {
    return friends === null || friends === void 0 ? void 0 : friends.map(friend => {
        return `Hello ${friend}`;
    });
};
const greetFriendsFunction3 = (friend1, ...friends) => {
    friends === null || friends === void 0 ? void 0 : friends.forEach(friend => console.log(`Hello ${friend}`));
};
const myBestFriendsObject = {
    name: 'Rahim',
    age: 25,
};
const { name: myBestFriendName } = myBestFriendsObject;
console.log(myBestFriendName);
greetFriendsFunction('Rahim', 'Karim', 'Abul');
console.log(greetFriendsFunction2('Rahim', 'Karim', 'Abul'));
greetFriendsFunction3('Rahim', 'Karim', 'Abul');
