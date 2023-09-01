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

document.addEventListener("DOMContentLoaded", function () {
    const masInfoButtons = document.querySelectorAll(".mas-info");
    const descripcionesCompletas = document.querySelectorAll(".descripcion-completa");

    masInfoButtons.forEach(function (masInfoButton, index) {
        masInfoButton.addEventListener("click", function (event) {
            event.preventDefault();
            descripcionesCompletas[index].classList.toggle("visible");
        });
    });
});

    const formHeight = document.querySelector('.contact-form').offsetHeight;
    const notebook = document.querySelector('.notebook');
    notebook.style.height = formHeight + 'px';

    // Agrega este fragmento a tu archivo JavaScript existente
document.addEventListener("DOMContentLoaded", function () {
    const whatsappLink = document.getElementById("whatsapp-link");
    const whatsappText = document.getElementById("whatsapp-text");
    const whatsappIcon = document.getElementById("whatsapp-icon");

    whatsappLink.addEventListener("mouseenter", function () {
        whatsappText.textContent = "¡Contáctanos en WhatsApp!";
        whatsappIcon.style.color = "#25d366"; // Color de WhatsApp verde
    });

    whatsappLink.addEventListener("mouseleave", function () {
        whatsappText.textContent = "Escribinos al whatsapp";
        whatsappIcon.style.color = ""; // Restaurar el color original del ícono
    });
});


function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    suggestions = document.getElementById('suggestions');
    li = suggestions.getElementsByTagName('li');
    
    // Ocultar sugerencias si el campo de búsqueda está vacío
    if (filter === '') {
        suggestions.style.display = 'none';
        return;
    }

    suggestions.style.display = 'block';
    suggestions.innerHTML = '';

    // Recorrer todos los elementos de la lista y mostrar los que coinciden con la consulta de búsqueda
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
            var suggestion = document.createElement('a');
            suggestion.href = a.href;
            suggestion.textContent = a.textContent;
            suggestions.appendChild(suggestion);
        } else {
            li[i].style.display = 'none';
        }
    }
}

// Evento de escucha para el campo de búsqueda
document.getElementById('searchInput').addEventListener('input', search);