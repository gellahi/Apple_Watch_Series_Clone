
// Dynamic Slider 

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
const totalSlides = slides.length;

// Function to update slider position
function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

// Next slide
nextBtn.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlide();
});

// Previous slide
prevBtn.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
});

// Auto-slide
setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlide();
}, 5000);
