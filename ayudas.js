// JavaScript para el menú responsive
$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        $('.collapse').toggleClass('show');
    });
});

// JavaScript para ajustar la altura del carrusel
$(window).on('load resize', function () {
    var carouselHeight = $('.carousel-inner img').height();
    $('.carousel-inner').css('height', carouselHeight);
});
