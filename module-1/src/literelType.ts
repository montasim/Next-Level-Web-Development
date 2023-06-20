const userLiterelType: {
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

const user2LiterelType: {
    name: string,
    company: 'My MedicalHUB International Ltd.',
    age: number,
    isMarried?: boolean,
    wife?: string
} = {
    name: 'Shuvo',
    company: 'My MedicalHUB International Ltd.',
    age: 25,
    isMarried: false,
}

console.log(userLiterelType);
console.log(user2LiterelType);

// user2LiterelType?.company = 'Enosis'; // can not update