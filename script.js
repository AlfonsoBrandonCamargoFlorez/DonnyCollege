





function moveSlide(step) {
    showSlide(currentIndex + step);
}

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(() => moveSlide(1), 3000); // Cambia la imagen cada 3 segundos
});
