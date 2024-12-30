document.addEventListener('DOMContentLoaded', () => {
    // Animate intro-text smoothly without removing it
    gsap.fromTo(
        ".intro-text", 
        { y: 30, opacity: 0 }, // Start state: moved down and invisible
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" } // End state: normal position, fully visible
    );

    // Subtext animation
    gsap.fromTo(
        ".subtext", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
    );

    // Navigation links animation
    gsap.from(".nav-links li", {
        duration: 0.5,
        y: -20,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.sticky-header');
    if (header) {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});

////////////
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        
        // Se l'ID è vuoto o non esiste, esci dalla funzione
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
  
        // Calcolo della posizione del target
        const offsetTop = targetElement.offsetTop;
  
        // Animazione di 0.2 secondi
        animateScroll(offsetTop, 200);
      });
    });
  
    /**
     * Effettua lo scroll animato verso la posizione 'targetPosition'
     * in 'duration' millisecondi (default: 200 ms).
     * Per un effetto "istantaneo" ma con un lieve smooth.
     */
    function animateScroll(targetPosition, duration = 200) {
      const start = window.pageYOffset; // posizione attuale dello scroll
      const distance = targetPosition - start;
      let startTime = null;
  
      function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        // Progresso da 0 a 1
        const progress = Math.min(elapsed / duration, 1);
  
        // Scroll lineare (se vuoi un easing, puoi modificarlo)
        window.scrollTo(0, start + distance * progress);
  
        if (elapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
  
      requestAnimationFrame(animation);
    }
  });
  