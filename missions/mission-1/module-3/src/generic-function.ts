// arrow function
const createArray = (param: string): string[] => {
    return [param];
};

// generic tuple function
const createArrayTupleFunction = <T, U>(param1: T, param2: U): [T, U] => {
    return [param1, param2];
};
const createArray2 =<T> (param: T): T[] => {
    return [param];
};

type NameObjectType = {name: string, age: number};

const result = createArray("John");
const result2 = createArray2<string>("John");
const result3 = createArray2<boolean>(true);
const result4 = createArray2<NameObjectType>({name: "John", age: 30});

const result5 = createArrayTupleFunction<string, number>("John", 30);

// spread operator
const crush = 'Kate Winslet';

const myInfo = {
    name: 'John Doe',
    age: 30,
    salary: 30000,
};

const newData = {...myInfo, crush};

// generic arrow function
const addMeIntoMyCrushMind = <T> (myInfo: T) => {
    const crush = 'Kate Winslet';
    const newData = {...myInfo, crush};

    return newData;
};

// generic normal function
function addMeIntoMyCrushMind2 <T> (myInfo: T)  {
    const crush = 'Kate Winslet';
    const newData = {...myInfo, crush};

    return newData;
};

const result6 = addMeIntoMyCrushMind(myInfo);

result6.name;