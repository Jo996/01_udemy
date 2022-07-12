'use strict';

const now = new Date('2022-07-12');

// Методы date
//1. получение компонентов (год, месяц, день, час, миннуты, сек, мили сек):
//console.log(now.getFullYear());
//console.log(now.getMonth());
//console.log(now.getDate());
//console.log(now.getDay()); //нумирация начинается с вскр (0) и 6ой день - суб

//console.log(now.getHours());
//console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset()); //получим разницу между нашим местным временем и UTC - в минутах
//console.log(now.getTime()); //  количество милисекунд с 1 января 1970 года

// 2. Методы set - для установления даты, времени и т.д.
//console.log(now.setHours(18)); 

// 3. parse 
//new Date.parse('2022-07-12');

// 4. получение разницы
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);

