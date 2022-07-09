
const btns = document.querySelectorAll('button');


//количество классов у первой кнопки
//console.log(btns[0].classList.length);

//позволяет получить класс, кот. распологается под определенным индексом
//console.log(btns[0].classList.item(0));
//добавить класс
//console.log(btns[0].classList.add('red'));
//удалить класс
//console.log(btns[0].classList.remove('blue'));
//тоглить - переключать классы
//console.log(btns[0].classList.toggle('blue'));

/* console.log(btns[1].classList.add('red'));
if (btns[1].classList.contains('red')) {
    //console.log('red');
}  */


//гамбургер функционал
btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
});

//делегирование событиий

const wrapper = document.querySelector('.btn-block');
/* wrapper.addEventListener('click', (event) => {
    //console.dir(event.target);
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('Hello');
    } 
}); */

/* wrapper.addEventListener('click', (event) => { 
    if (event.target && event.target.classList.contains('blue')) {
        console.log('Hello');
    }
}); */

//пример ошибки
/* btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
}); */

//продвинутое делегирование, потому что указываем конкретно селекторы, кот-ые нас интересуют
wrapper.addEventListener('click', (event) => {
    //console.dir(event.target);
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    } 
}); 


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
  