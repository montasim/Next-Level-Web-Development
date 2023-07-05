const userObject: {
    name: string,
    age: number,
    isMarried: boolean,
    wife: string,
} = {
    name: 'Montasim',
    age: 25,
    isMarried: true,
    wife: 'Karobi'
}

const userObjectInComplete: {
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string
} = {
    name: 'Montasim',
    age: 25,
    isMarried: true,
    wife: 'Karobi'
}

const userObjectWithOptionalType: {
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string
} = {
    name: 'Montasim',
    age: 25,
    isMarried: true,
}

const userObjectWithSpecificValue: {
    name: string,
    company: 'My MedicalHUB International Ltd.',
    age: number,
    isMarried: boolean,
    wife?: string
} = {
    name: 'Montasim',
    company: 'My MedicalHUB International Ltd.',
    age: 25,
    isMarried: true,
}

console.log(userObject);
console.log(userObjectInComplete);
console.log(userObjectWithOptionalType);
console.log(userObjectWithSpecificValue);