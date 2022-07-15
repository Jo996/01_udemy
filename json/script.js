'use strict';

const person = {
    name: 'Alex',
    tel: '+7444444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

/* console.log(JSON.stringify(person));

console.log(JSON.parse((JSON.stringify(person)))); */

// глубокое копирование объектов

const clone = JSON.parse((JSON.stringify(person)));
clone.parents.mom = 'Ann';
clone.parents.dad = 'Pig';

console.log(person);
console.log(clone);
