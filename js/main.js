
  // Detectar cuando la tarjeta entra en el viewport
  window.addEventListener("scroll", function() {
    let animatedCards = document.querySelectorAll('.animated-card');
    animatedCards.forEach(function(card) {
      if (card.getBoundingClientRect().top < window.innerHeight) {
        card.classList.add('fadeInUp'); // Agregar la clase de animación cuando entra al viewport
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-right, .fade-left');
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    fadeElements.forEach(element => observer.observe(element));
});

 // Mostrar el botón cuando se hace scroll hacia abajo
 window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};

// Función para subir hasta arriba
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}