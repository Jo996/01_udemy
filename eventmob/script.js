'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    /* box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        
        //console.log(e.touches);
        

    }); */

     box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });
 
    /* box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
  */
});

// console.log(e.targetTouches); - выведет все пальцы, кот. взаимодействуют с конкретным элементом;

//console.log(e.changedTouches); - список пальцев, кот. участвуют в текущем событии - совершили и закончили действие.

