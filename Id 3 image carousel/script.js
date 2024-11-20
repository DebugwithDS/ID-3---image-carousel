let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function rotateCarousel() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const angle = -90 * currentIndex;
    document.querySelector('.carousel').style.transform = `rotateY(${angle}deg)`;
}


setInterval(rotateCarousel, 2000);
