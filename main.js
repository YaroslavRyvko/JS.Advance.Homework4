console.log('---------- TASK 1 ---------');

class Worker {
    constructor(name, surname, rate, days) {
        this.firstName = name;
        this.secondName = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log('worker.firstName =>', worker.firstName);
console.log('worker.secondName =>', worker.secondName);
console.log('worker.rate =>', worker.rate);
console.log('worker.days =>', worker.days);
console.log('worker.getSalary() =>', worker.getSalary());
const worker2 = new Worker('Alina', 'Kohana', 14, 31);
console.log('worker2.firstName =>', worker2.firstName);
console.log('worker2.secondName =>', worker2.secondName);
console.log('worker2.rate =>', worker2.rate);
console.log('worker2.days =>', worker2.days);
console.log('worker2.getSalary() =>', worker2.getSalary());
console.log('sum of salaries =>', worker.getSalary() + worker2.getSalary());

console.log('---------- TASK 2 ---------');

class MyString {
    reverse(line) {
        let string = '';
        for (let i = line.length; i > 0; i--) {
            string += line.charAt(i - 1);
        }
        return string;
    }
    ucFirst(line) {
        let upper = line.charAt(0).toUpperCase() + line.slice(1);
        return upper;
    }
    ucWords(line) {
        let arr = line.split(' ');
        let result = [];
        let finalRes = '';
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
        }
        finalRes = result.join(' ')
        return finalRes;
    }
}
const str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));

console.log('---------- TASK 3 ---------');

class Coffeemake {
    on() {
        return 'I`m working'
    }
    off() {
        return 'I`m not working'
    }
}

class Drip extends Coffeemake {
    constructor(color = 'black') {
        super();
        this.color = color;
    }
    drip() {
        return `I am drip coffee maker, my color is ${this.color}`
    }
}

class Сarob extends Coffeemake {
    constructor(color = 'black') {
        super();
        this.color = color;
    }
    carob() {
        return `I am carob coffee maker, my color is ${this.color}`
    }
}

class CoffeeMachine extends Coffeemake {
    constructor(color = 'black') {
        super();
        this.color = color;
    }
    coffeeMachine() {
        return `I am coffeeMachine, my color is ${this.color}`
    }
}

let drip = new Drip('white');
console.log(drip.drip());
console.log(drip.on());
console.log(drip.off());

let carob = new Сarob('green');
console.log(carob.carob());
console.log(carob.on());
console.log(carob.off());


let coffeeMachine = new CoffeeMachine('red');
console.log(coffeeMachine.coffeeMachine());
console.log(coffeeMachine.on());
console.log(coffeeMachine.off());

