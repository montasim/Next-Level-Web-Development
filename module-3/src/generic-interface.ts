// generic interface
interface CrushInterface<T, U = string>{ // type parameter will not be optional. Can set default type for type parameter
    name: string;
    husband: T;
    wife?: U; // optional
};

const crush1: CrushInterface<string> = {
    name: "John",
    husband: "Doe",
};

const crush2: CrushInterface<number> = {
    name: "John",
    husband: 1,
};

interface HusbandInterface {
    name: string;
    age: number;
};

const crush3: CrushInterface<HusbandInterface> = {
    name: "John",
    husband: {name: "Doe", age: 30},
};
interface PersonInterface {
    name: string;
    age: number;
};

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
    name: "John",
    husband: {name: "Doe", age: 30},
    wife: {name: "Jane", age: 25},
};