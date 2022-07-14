'use strict';

// rest-оператор
const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}
 
log('basic', 'rest', 'operator', 'usage');

//параметры по умолчанию 
function calcOrDouble(number, basis = 2) {
    //basis = basis || 2; -старый вариант 
    console.log(number * basis);
}

calcOrDouble(3);

/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
};

User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
};
 */

/* class User {
    constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}


const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);
ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex); */