// JavaScript para el menú responsive
$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".collapse").toggleClass("show");
  });
});

// JavaScript para ajustar la altura del carrusel
$(window).on("load resize", function () {
  var carouselHeight = $(".carousel-inner img").height();
  $(".carousel-inner").css("height", carouselHeight);
});

// Obtén todas las secciones con la clase 'slide-in'
const slideSections = document.querySelectorAll(".slide-in");

// Función para verificar si una sección está visible en la ventana
function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.8; // Cambia el umbral según tu preferencia
}

window.onscroll = function () {
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
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const link = this.getAttribute("href");
      window.location.href = link;
    });
  });
});

// Iniciar el carrusel de la clínica
$("#clinicCarousel").carousel();

document.addEventListener("DOMContentLoaded", function () {
  const masInfoButtons = document.querySelectorAll(".mas-info");
  const descripcionesCompletas = document.querySelectorAll(
    ".descripcion-completa"
  );

  masInfoButtons.forEach(function (masInfoButton, index) {
    masInfoButton.addEventListener("click", function (event) {
      event.preventDefault();
      descripcionesCompletas[index].classList.toggle("visible");
    });
  });
});

const formHeight = document.querySelector(".contact-form").offsetHeight;
const notebook = document.querySelector(".notebook");
notebook.style.height = formHeight + "px";

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

// Esta función escucha los clics en los enlaces internos y desplaza suavemente la página.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Función para verificar si un elemento está visible en la ventana
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Función para manejar la animación al hacer scroll
function handleScrollReveal() {
  var element = document.getElementById("scroll-reveal");
  if (isElementInViewport(element)) {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }
}

// Agregar un evento de desplazamiento para activar la animación
window.addEventListener("scroll", handleScrollReveal);
// Llamar a la función una vez en la carga inicial
handleScrollReveal();
