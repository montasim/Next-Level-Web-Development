const myFriendsArray: string[] = ['Rahim', 'Karim', 'Abul'];
const newFriendsArray: string[] = ['Salam', 'Kalam', 'Rubel'];

myFriendsArray?.push(...newFriendsArray);

console.log(myFriendsArray);