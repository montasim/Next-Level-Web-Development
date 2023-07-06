type MyInfoType = {
    name: string,
    age: number,
    salary: number
};

const myInfo2: MyInfoType = {
    name: 'John Doe',
    age: 30,
    salary: 30000,
};

// generic arrow function
const addMeIntoMyCrushMind3 = <T> (myInfo: T) => {
    const crush = 'Kate Winslet';
    const newData = {...myInfo, crush};

    return newData;
};

const result7 = addMeIntoMyCrushMind(myInfo);

result7.name;