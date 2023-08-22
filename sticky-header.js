// Когда пользователь прокручивает страницу, выполните myFunction
window.onscroll = function() {
    myFunction();
    addButton();
}

// Получить шапку страницы
let headerMain = document.querySelector('.header');

// Получить смещение позиции шапки
let sticky = headerMain.offsetTop;

//Получить дополнительную кнопку в навигации
let btnSecond = document.querySelector('.btn-sticky');

// Добавить класс sticky к шапке, когда вы достигнете ее положения прокрутки. Удалите "sticky", когда вы покидаете положение прокрутки

function myFunction() {
    if(window.scrollY >= sticky) {
        headerMain.classList.add('sticky');
    } 
}

//Добавить класс активности к кнопке при прокрутке страницы

function addButton() {
    if(window.scrollY >= sticky) {
        btnSecond.classList.add('btn-sticky_active');   
    } else {
        btnSecond.classList.remove('btn-sticky_active');
    }
}

const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".navigation-list");

menuBtn.addEventListener("click", function() {
    
    menuMobile.classList.toggle("menu-open");
    headerMain.classList.toggle("sticky-mobile");
    btnSecond.classList.toggle("btn-call-mobile");
    
});
