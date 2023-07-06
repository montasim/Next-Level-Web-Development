type UserType = {
    name: string;
    age: number;
};

// interface is used for object type data
// interface can be extended
interface IUser {
    name: string;
    age: number;
};

const userWithTypeAlias: UserType = {
    name: 'Type Alias',
    age: 20
};

userWithTypeAlias.age = 30;

const userWithInterface: IUser = {
    name: 'Interface',
    age: 200
};

userWithInterface.age = 300;

interface IExtendedUser extends IUser {
    role: string;
};

// extended interface
const userWithExtendedInterface: IExtendedUser = {
    name: 'Extended Interface',
    age: 40,
    role: 'admin'
};

userWithExtendedInterface.age = 50;

// interface extension can be done by type alias using union and intersection
type extendedUserType = UserType & {
    role: string;
};

const userWithExtendedType: extendedUserType = {
    name: 'Extended Type',
    age: 60,
    role: 'admin'
};

userWithExtendedType.age = 70;

type AddNumberType = (number1: number, number2: number) => number;

// use type alias for function type because it looks more clean and readable
const addNumbersWithType: AddNumberType = (number1, number2) => {
    return number1 + number2;
};

interface IAddNumber {
    (number1: number, number2: number): number;
};

const addNumbersWithInterface: IAddNumber = (number1, number2) => {
    return number1 + number2;
}

type RollNumbersType = number[];
interface IRollNumbers {
    [index: number]: number;
}

const rollNumbersArray: RollNumbersType = [1, 2, 3, 4, 5];
const rollNumbersArrayWithInterface: IRollNumbers = [1, 2, 3, 4, 5];

// when works with object use interface
// for others case use type alias