document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-btn').classList.toggle('show');
    document.querySelector('.showcase').classList.toggle('show');
    document.querySelector('.nav-menu').classList.toggle('show');
    document.querySelector('.nav-main').classList.toggle('show');
    document.querySelector('.xmark').classList.toggle('show');
    document.querySelector('.footer').classList.toggle('show');
    document.querySelector('.social').classList.toggle('show');
})

document.querySelector('.xmark').addEventListener('click', () => {
    document.querySelector('.xmark').classList.toggle('show');
    document.querySelector('.menu-btn').classList.toggle('show');
    document.querySelector('.nav-menu').classList.toggle('show');
    document.querySelector('.nav-main').classList.toggle('show');
    document.querySelector('.showcase').classList.toggle('show');
    document.querySelector('.footer').classList.toggle('show');
    document.querySelector('.social').classList.toggle('show');
})

document.querySelector('.home').addEventListener('click', () => {
    document.querySelector('.xmark').classList.toggle('show');
    document.querySelector('.menu-btn').classList.toggle('show');
    document.querySelector('.nav-menu').classList.toggle('show');
    document.querySelector('.nav-main').classList.toggle('show');
    document.querySelector('.showcase').classList.toggle('show');
    document.querySelector('.footer').classList.toggle('show');
    document.querySelector('.social').classList.toggle('show');
})