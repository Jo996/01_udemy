'use strict';

//new RegExp('pattern', 'flags');
// /pattern/f

//const ans = prompt('Введите ваше имя');

/* const reg = /n/ig;
console.log(reg.test(ans)); */

/* const reg = /\d/g;
console.log(ans.match(reg));   */
// i
// g
// m

// console.log(ans.search(reg));
//console.log(ans.match(reg));

/* const pass = prompt('Password');
console.log(pass.replace(/./g, "*"));


console.log('12-34-56').replace(/-/g, ":");
 */


const str = 'My name is R2D3';

console.log(str.match(/\D/ig));

// \D не числа
// \W  не буквы 
