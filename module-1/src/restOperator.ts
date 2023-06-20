const greetFriendsFunction = (...friends: string[]): void => friends?.forEach(friend => console.log(`Hello ${friend}`));

const greetFriendsFunction2 = (...friends: string[]): any => {
    return friends?.map(friend => {
        return `Hello ${friend}`;
    })
};
const greetFriendsFunction3 = (friend1: string, ...friends: string[]): void => {
    friends?.forEach(friend => console.log(`Hello ${friend}`));
};

const myBestFriendsObject: {
    name: string;
    age: number;
} = {
    name: 'Rahim',
    age: 25,
}

const {name: myBestFriendName} = myBestFriendsObject;

console.log(myBestFriendName)

greetFriendsFunction('Rahim', 'Karim', 'Abul');

console.log(greetFriendsFunction2('Rahim', 'Karim', 'Abul'));

greetFriendsFunction3('Rahim', 'Karim', 'Abul');