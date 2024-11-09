
  // Detectar cuando la tarjeta entra en el viewport
  window.addEventListener("scroll", function() {
    let animatedCards = document.querySelectorAll('.animated-card');
    animatedCards.forEach(function(card) {
      if (card.getBoundingClientRect().top < window.innerHeight) {
        card.classList.add('fadeInUp'); // Agregar la clase de animación cuando entra al viewport
      }
    });
  });

