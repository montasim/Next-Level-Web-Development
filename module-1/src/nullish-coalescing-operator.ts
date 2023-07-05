const isAuthenticatedUser = undefined;
const isAuthenticatedUser2 = '';

const userName = isAuthenticatedUser ?? 'Guest User';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest User';

const userName3 = isAuthenticatedUser2 ?? 'Guest User';
const userName4 = isAuthenticatedUser2 ? isAuthenticatedUser2 : 'Guest User';

console.log(userName);
console.log(userName2);

console.log(userName3);
console.log(userName4);

type ManushType = {
    name: string;
    age: number;
    address?: {
        city: 'No City';
        road: 'No Road';
        home?: '';
    }
}

const manush1: ManushType = {
    name: 'Montasim',
    age: 22,
    address: {
        city: 'No City',
        road: 'No Road',
    }
}

const home = manush1?.address?.home ?? 'No Home';

console.log(home);