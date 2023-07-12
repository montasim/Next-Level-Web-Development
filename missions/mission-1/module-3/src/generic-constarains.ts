type MyInfoType = {
    name: string,
    age: number,
    salary: number
};

interface MyInfoInterface {
    name: string,
    age: number,
    salary: number
};

const myInfo2: MyInfoType = {
    name: 'John Doe',
    age: 30,
    salary: 30000,
};

const myInfo3: MyInfoInterface = {
    name: 'Rahim Mia',
    age: 50,
    salary: 50000,
}

// generic arrow function
const addMeIntoMyCrushMind3 = <T extends MyInfoType> (myInfo: T) => {
    const crush = 'Kate Winslet';
    const newData = {...myInfo, crush};

    return newData;
};

const result7 = addMeIntoMyCrushMind3<MyInfoType>(myInfo2);
const result8 = addMeIntoMyCrushMind3<MyInfoInterface>(myInfo3);

console.log(result7);
console.log(result8);