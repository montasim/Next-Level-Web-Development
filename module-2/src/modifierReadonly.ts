const userModifierReadonly: {
    name: string,
    readonly company: string,
    age: number,
    isMarried: boolean,
    wife?: string
} = {
    name: 'Montasim',
    company: 'My MedicalHUB International Ltd.',
    age: 25,
    isMarried: true,
}

// userModifierReadonly?.company = 'Enosis'; // can not update

console.log(userModifierReadonly);