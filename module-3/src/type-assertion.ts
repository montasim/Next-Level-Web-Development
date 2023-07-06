let emni: any;

emni = 'Next Level Web Development';

(emni as string).toUpperCase();

function kgToGram(param: string | number | undefined): string | number | undefined {
  if (typeof param === 'string') {
    param = parseInt(param);

    return `The Converted Value is ${param * 1000} Gram`;
  }
  else if(typeof param === 'number') {
      return `The Converted Value is ${param * 1000} Gram`;
  }
  else{
      return `Unsuported Type`;
  }
}

const resultToBeString = kgToGram('100') as string;
const resultToBeNumber = kgToGram(100) as number;
const resultToBeUndefined = <undefined> kgToGram(undefined);

console.log(resultToBeString);
console.log(resultToBeNumber);
console.log(resultToBeUndefined);

type CustomErrorType = {
    message: string
}

try{

}
catch (error) {
    console.log((error as CustomErrorType).message);
}