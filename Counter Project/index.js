let value = document.querySelector('.count');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.reset');

function minus(){
    value.textContent = parseInt(value.textContent)-1;
}

function plus(){
    value.textContent = parseInt(value.textContent)+1;
}

function reset(){
    value.textContent = 0;
}

button1.addEventListener('click', minus);
button2.addEventListener('click', plus);
button3.addEventListener('click', reset);