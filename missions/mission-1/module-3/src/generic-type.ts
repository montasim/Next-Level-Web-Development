// generic means generalize

const rollNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rollNumber2: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// use angle brackets instead of square brackets
const rollNumber3: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rollNumber4: Array<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const userNameAndRollNumber: Array<{name: string; roll: number}> = [
    {name: "John", roll: 1},
    {name: "Doe", roll: 2},
];

// generic type declaration
type GenericArrayType<T> = Array<T>;
type GenericArrayType2<T> = [T];
type NameRollType = {name: string; roll: number};

// using generic type
const rollNumber5: GenericArrayType<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rollNumber6: GenericArrayType<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// const rollNumber7: GenericArrayType2<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // error
// const rollNumber8: GenericArrayType2<string> = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; // error
const userNameAndRollNumber2: GenericArrayType<NameRollType> = [
    {name: "John", roll: 1},
    {name: "Doe", roll: 2},
];

// generic tuple declaration
type GenericTupleType<T, U> = [T, U];

// using generic tuple
const relation: GenericTupleType<string, number> = ["John", 1];
const relationWithSalary: GenericTupleType<object, string> = [
    {name: "John", salary: 1},
    'John',
];

// using generic tuple is not best practice
const relationWithSalary2: GenericTupleType<object, string> = [
    {profession: "Service Holder", age: 30}, // this is not a valid object
    'John',
];

type RelationWithSalaryType = {name: string, salary: number};
interface RelationWithSalaryInterface {
    name: string;
    salary: number;
}

// to solve the generic tuple problem define object structure
const relationWithSalary3: GenericTupleType<RelationWithSalaryType, string> = [
    {name: "John", salary: 30000}, // this is not a valid object
    'John',
];
const relationWithSalary4: GenericTupleType<RelationWithSalaryInterface, string> = [
    {name: "John", salary: 30000}, // this is not a valid object
    'John',
];