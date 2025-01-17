
document.querySelector('button').addEventListener('click', function() {
    alert('Search functionality to be added!');
});


// Slideshow for Restaurant 1
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function showSlides1(n) {
    let slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "block";
}

// Slideshow for Restaurant 2
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    let slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}

// Slideshow for Restaurant 3
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
    let slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
}

// Slideshow for Restaurant 4
let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function showSlides4(n) {
    let slides = document.getElementsByClassName("mySlides4");
    if (n > slides.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex4 - 1].style.display = "block";
}