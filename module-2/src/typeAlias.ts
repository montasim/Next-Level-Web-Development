// conventionally first letter is capital case and type word is present at the end of the type
type CrushObjectType = {
    name: string;
    age: number;
    profession: string;
    address: string;
}

const crushObject1: CrushObjectType = {
    name: 'Karobi',
    age: 25,
    profession: 'Housewife',
    address: 'Rangpur',
}

const crushObject2: CrushObjectType = {
    name: 'Sharmin',
    age: 25,
    profession: 'Housewife',
    address: 'Rangpur',
}

type OperationType = (x: number, y: number) => number;
const calculate = (number1: number, number2: number, operation: OperationType): number => {
    return operation(number1, number2);
}

console.log(calculate(10, 20, (x, y) => x + y));
console.log(calculate(10, 20, (x, y) => x - y));
console.log(calculate(10, 20, (x, y) => x * y));
console.log(calculate(10, 20, (x, y) => x / y));