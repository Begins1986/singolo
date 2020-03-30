const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    let idForScroll = event.target.innerHTML.toLowerCase();
        document.querySelectorAll('section').forEach((elem) => {
            if (elem.getAttribute('id') == idForScroll) {
                let pos = elem.offsetTop - 93;
                setTimeout(function () {
                    window.scrollTo(0, pos);
                }, 0);
            }
        });
})


document.addEventListener('scroll', onScroll);

function onScroll(event) {
    //    console.log(event);
    const currentPos = window.scrollY;
    //    console.log(currentPos);
    document.querySelectorAll('section').forEach((el) => {
        //        console.log(el.getAttribute('id'));
        el.getAttribute('id');
        if (el.offsetTop - 95 <= currentPos && (el.offsetTop + el.offsetHeight) - 95 > currentPos) {
            MENU.querySelectorAll('li a').forEach(a => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                };
            })
        }
    });
}

//phone click
const PHONE = document.getElementById('phone');
const src_ver = document.getElementsByClassName('screen-vertical')[0];
const src_hor = document.getElementsByClassName('screen-horizontal')[0];
console.log(src_ver);

PHONE.addEventListener('click', function (event) {
    if (event.target.classList == 'screen-vertical' || event.target.classList == 'phone-ver')
        src_ver.classList.toggle('screen-black');
    else if (event.target.classList == 'screen-vertical screen-black')
        src_ver.classList.remove('screen-black');
});

const PHONE1 = document.getElementById('phone1');


PHONE1.addEventListener('click', function (event) {

    if (event.target.classList == 'screen-horizontal' || event.target.classList == 'img-horizontal') {
        src_hor.classList.toggle('screen-black');
    } else if (event.target.classList == 'screen-horizontal screen-black')
        src_hor.classList.remove('screen-black');
});

//slider
let items = document.querySelectorAll('.item_slider');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;

}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    })
}



function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

document.querySelector('.arrow-left').addEventListener('click', function () {
    if (isEnabled) {
        previousItem(currentItem);
    }
})

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.arrow-right').addEventListener('click', function () {
    if (isEnabled) {
        nextItem(currentItem);
    }

})



//portfolio items

const BUTTON = document.getElementsByClassName('portfolio_buttons')[0];
const works = document.getElementsByClassName('portfolio_work');
BUTTON.addEventListener('click', (event) => {
    BUTTON.querySelectorAll('div').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    let div = works[0].cloneNode(true);
    works[0].remove();
    works[works.length - 1].after(div);
});

//portfolio work
const WORK = document.getElementsByClassName('portfolio_works')[0];
WORK.addEventListener('click', (event) => {
    WORK.querySelectorAll('div').forEach(el => el.classList.remove('border'));
    event.target.classList.add('border');
});

//form
const FORM = document.getElementById('form');
const BUTTON_FORM = document.getElementById('submit');
const CLOSE_BUTTON = document.getElementById('close_btn');
const NAME_INPUT = document.getElementById('name');
const EMAIL_INPUT = document.getElementById('email');
console.log(CLOSE_BUTTON);
FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    if (NAME_INPUT.checkValidity() && EMAIL_INPUT.checkValidity()) {
        const subject = document.getElementById('subject').value.toString();
        const text = document.getElementById('text').value.toString();
        document.getElementById('result_subject').innerText = subject ? " " + subject : " Без темы";
        document.getElementById('result_text').innerText = text ? " " + text : " Без описания";
        document.getElementById('message_block').classList.remove('hidden');
    }
});

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result_subject').innerText = "";
    document.getElementById('result_text').innerText = "";
    document.getElementById('message_block').classList.add('hidden');
    FORM.reset();
});
//Burger
const BURGER=document.querySelector('.burger-menu');
console.log(BURGER);
function burgerMenu(selector) {
    let menu = document.querySelector('.burger-menu');
    let button = menu.querySelector('.nav_burger');
    let overlay = menu.querySelector('.burger-menu_overlay');
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        toggleMenu();
    });
    overlay.addEventListener('click',()=>toggleMenu());
    function toggleMenu(){
        menu.classList.toggle('burger-menu_active');
    }  
}
burgerMenu(BURGER);