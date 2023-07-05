enum Grade {
   junior,
   mid,
   senior
}

enum Grade2 {
   junior = 'junior',
   mid = 'mid',
   senior = 'senior'
}

type StudentType = {
    name: string;
    age: number;
    grade: Grade;
}

const rahim: StudentType = {
    name: 'Rahim',
    age: 25,
    grade: 1
}
const rahima: StudentType = {
    name: 'Rahim',
    age: 25,
    grade: Grade.senior
}