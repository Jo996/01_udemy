// получеие heaad/body
//console.log(document.head);

//
//console.log(document.documentElement);
//свойство  .childNodes - показывают узлы, которые есть у body
//console.log(document.body.childNodes);

//console.log(document.body.firstChild);
//console.log(document.body.lastElementChild);

//console.log(document.querySelector('#current').parentNode.parentNode);

//console.log(document.querySelector('#current').parentElement);

// data-атрибуты и работа с ними
//console.log(document.querySelector('[data-current="3"]'));

//console.log(document.querySelector('[data-current="3"]').previousSibling);


//console.log(document.querySelector('[data-current="3"]').nextElementSibling);


//111 преимущество for...of
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
};