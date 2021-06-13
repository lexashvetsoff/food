let burger = document.querySelector('.navbar-burger');
burger.addEventListener('click', function () {
    document.querySelector('.navbar-burger').classList.toggle('navbar-burger--activ')
    document.querySelector('.navbar-burger__item').classList.toggle('navbar-burger__item--activ')
    document.querySelector('.mobile').classList.toggle('mobile--activ');
});