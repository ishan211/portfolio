// scripts.js

// Function to get and format the current date
function updateDate() {
    const dateElement = document.getElementById('current-date');
    const options = { year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, options);

    dateElement.textContent = formattedDate;
}

// Typing Animation
let typingText = document.getElementById('typing-text');
let texts = ["programming", "low-level development", "compilers", "operating systems", "machine learning", "solving problems"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (!isDeleting && charIndex < texts[index].length) {
        currentText += texts[index].charAt(charIndex);
        charIndex++;
        typingText.textContent = currentText;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        currentText = currentText.slice(0, -1);
        charIndex--;
        typingText.textContent = currentText;
        setTimeout(type, 50);
    } else if (!isDeleting && charIndex === texts[index].length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateDate(); // Update the date in the footer
    type();  // Start the typing animation
});

// Scroll Fade-In Animation
const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const trigger = window.innerHeight / 1.3;

        if (sectionTop < trigger) {
            section.classList.add('visible');
        }
    });
});

// Collapsible Sections
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(coll => {
    coll.addEventListener('click', () => {
        const content = coll.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// Modal Functionality
const modalButtons = document.querySelectorAll('.modal-button');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.close');

modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.getElementById(button.dataset.modal);
        modal.style.display = 'block';
    });
});

closes.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

/*
// Slideshow Functionality (Commented Out)
let slideIndex = 1;
let slides, dots, captionText;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("demo");
    captionText = document.getElementById("caption");

    if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        if (dots.length > 0) {
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }

    let numberText = document.querySelector(".numbertext");
    if (numberText) {
        numberText.textContent = `${slideIndex} / ${slides.length}`;
    }
}*/
