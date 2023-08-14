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

// Obtén todas las secciones con la clase 'slide-in'
const slideSections = document.querySelectorAll('.slide-in');

// Función para verificar si una sección está visible en la ventana
function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  return (rect.top <= window.innerHeight * 0.8); // Cambia el umbral según tu preferencia
}

AOS.init();