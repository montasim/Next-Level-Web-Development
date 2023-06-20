const namesArray = ['Abul', 'Kabul', 'Babul'];
const numbersArray: number[] = [1, 2, 3, 4, 5];

console.log(namesArray);
console.log(numbersArray);

namesArray.map((name : string) => {
    console.log(name.charAt(4));
})