let wrap = document.querySelector('.wrapper');
let box = document.querySelector('.Share-modal-main-box');
function onBtn1(){
    box.setAttribute('style','transform:scale(1);');
    wrap.setAttribute('style','opacity:0.8;');
}

function onBtn2(){
    box.setAttribute('style','transform:scale(0);');
    wrap.setAttribute('style','opacity:1;');
}
