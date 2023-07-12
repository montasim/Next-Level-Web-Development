type PersonType = {
    name: string;
    age: number;
    address: string;
};

type newType = 'name' | 'age' | 'address'; // manual approach
type newTypeUsingKeyOf = keyof PersonType; // using keyof

const a: newType = 'age';
const b: newTypeUsingKeyOf = 'age';

// use of keyof
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
}

const property = getProperty({name: 'John', age: 30}, 'name');

// using keyof we can force or constrains a generic type to another generic type