// when a function is being used inside of an object is called method
const objectWithMethod: {
    name: string,
    balance: number
    addBalance(money: number): void
} = {
    name: 'Shuvo',
    balance: 10000,
    addBalance(money: number){
        return `My New Balance: ${this.balance + money}`;
    }
}