const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

function showSlide(n) {
    if (n >= slideCount) index = 0;
    else if (n < 0) index = slideCount - 1;
    else index = n;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(index - 1));
nextButton.addEventListener('click', () => showSlide(index + 1));

// Auto slide every 5 seconds
setInterval(() => showSlide(index + 1), 5000);
