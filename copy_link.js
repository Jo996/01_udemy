'use strict';
// когда мы  работаем с простыми\примитивными типами данных (строки, числа, логические значения), то они 
// передаются по значению. 
let a = 5,
    b = 5;
b = b + 5;

console.log(b);
console.log(a);


// когда мы работаем с объектами (массивы, функции, какие-то спецефические объекты), то передача идёт не 
// по значению, а по ссылке
const obj = {
    a: 5,
    b: 1
};

const copy = obj; //Ссылку
copy.a = 10; // модифицируя копию - мы как бы модифицируем наш изначальный объект.
// потому что мы работаем не с копией этого объекта, а со ссылкой на предыдущий объект. 
//Такое поведение называется - передача по ссылке

console.log(copy);
console.log(obj);

// Способы создания копий массивов, объектов и т.д.:
// 1. использование цикла
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); //копирование объекта

newNumbers.a = 10;
newNumbers.c.x = 10; 

console.log(newNumbers);
console.log(numbers);
// глубокие и поверхностные копии объектов
// мы создали поверхностную копию, потому что она берёт все обычные свойства, которые были в родителе и создаёт какбы независимые структуры
//НО как только у нас появляется вложенная стукртура например, одно из свойств будет содержать вложенный объект, или будет содержать массив
// то это свойство опять же будет иметь ссылочный тип данных - это и называется поверхностной копией объектов.
// и мы будем нормально работать только с теми свойствами, которые лежат на первом уровне!!!!


// 2. Object.assign - об'едіняются два объекта и создается незовисимая поверхностная копия объекта
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); 

const clone = Object.assign({}, add); 
clone.d = 20; 
console.log(add);
console.log(clone);

//3. Создание копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'fjrgrlmv';
console.log(newArray);
console.log(oldArray);

//4. Оператор Spread - разворачивает структуру и превращает её просто в набор каких-то данных

const video = ['youtube', 'vimeo', 'rutube'];
blogs = ['wordpress', 'livejournal', 'blogger'];
internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newArray = [...array];
const q = {
    one: 1,
    two: 2
};
const newObj = { ...q };

