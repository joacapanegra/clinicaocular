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

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
};

// Función para volver arriba de la página
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const link = this.getAttribute("href");
            window.location.href = link;
        });
    });
});

// Iniciar el carrusel de la clínica
$('#clinicCarousel').carousel();
