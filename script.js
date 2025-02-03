
// Dynamic Slider 

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
const totalSlides = slides.length;

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');
dots[0].classList.add('active');

// Function to update slider position
function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
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

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        index = parseInt(dot.dataset.index);
        updateSlide();
    });
});

// Auto-slide
setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlide();
}, 5000);
