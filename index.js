var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.menu-items');

    burger.addEventListener('click' , () =>{
        nav.classList.toggle('menu-items-active');
    });
};

navSlide();