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


// Seleziona tutti i link con la classe "nav-item"
const navItems = document.querySelectorAll('.nav-item');

// Aggiungi un evento "click" a ogni link
navItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault(); // Previene il comportamento predefinito del link

        // Rimuove la classe "active" da tutti i link
        navItems.forEach(link => link.classList.remove('active'));

        // Aggiunge la classe "active" al link cliccato
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.sticky-header');
    if (header) {
        document.addEventListener('scroll', () => {
            console.log("SCROLLANDO");
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});


