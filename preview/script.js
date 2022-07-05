'use strict';

const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// назначение обработчика событий :
/* btn.addEventListener('click', () => {
    alert('click');
}); */

/* btn.addEventListener('mouseenter', () => {
    console.log('Hover');
}); */

// event
//btn.addEventListener('click', (e) => {
 //   console.log(e.target);
    //e.target.remove();
//});


// .removeEventListener
/* let i = 0; */
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
   /*  i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    } */
};
/* btn.addEventListener('click', deleteElement); */
//overlay.addEventListener('click', deleteElement);

// отмена стандартного поведения в браузере ( на примере ссылки)
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

// один обработчик события сразу на несколько элементов
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, { once: true});

});

// опции события
//btn.addEventListener('click', deleteElement, { once: true });
