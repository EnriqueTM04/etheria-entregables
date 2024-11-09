
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