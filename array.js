'use strict';

const arr = [2, 3, 6, 8, 10];
arr.sort(compareNum);
console.log(arr);
// .sort(fn) - сортировка массива, если не передать функцию сравнения сортирует элементы как строки
function compareNum(a, b) {
    return a - b;
}

/* Метод .pop удаляет последний элемент из массива 
Метод .push(элемент) - добавляет элемент к концу массива*/
arr.pop();
arr.push(10);

/* Пример нарушения порядка массива, нарушается логика и свойство length показывает неверное значение */
/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* Метод .forEach позволяет гибко перебрать все элементы массива. Метод .forEach содержит в себе callback функцию, которая может принять в себя три аргумента
1ый аргумент - это, собственно тот элемент, который мы сейчас перебираем;
2ой аргумент - номер по порядку,
3ий аргумент - массив, кот. мы перебираем */
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

/* Методы перебора массива */
/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
} */

// split() превращает строку в массив
const str = prompt("", "");
const products = str.split(", ");
products.sort();
// join - превращает массив в строку
console.log(products.join('; '));
