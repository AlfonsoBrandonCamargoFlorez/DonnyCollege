// script.js

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images .carousel-slide');
const totalImages = images.length;

function showSlide(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

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
