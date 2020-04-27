
let showMenu = document.getElementById("showMenuBtn");
let hideMenu = document.getElementById("hideMenuBtn");
let slideCont = document.getElementById("slider");
let mobileNav = document.getElementById("mobile-nav-cont");
let slideNumber = document.getElementsByClassName("number");



showMenu.addEventListener('click', function(){
  showMenu.style.display = "none";
  hideMenu.style.display = "flex"
  mobileNav.style.display = "flex";
});

hideMenu.addEventListener('click', function(){
  showMenu.style.display = "flex";
  hideMenu.style.display = "none"
  mobileNav.style.display = "none";
});

// Function for lightMode

document.getElementById("lightMode").addEventListener('click', ()=>{
    console.log("Clicked");
    document.getElementById('lightMode').style.display = 'none'
    document.getElementById('darkMode').style.display = 'block'
    document.getElementById('bar').style.borderColor = 'black'
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'

});

// Function for DarkMode

document.getElementById("darkMode").addEventListener('click', ()=>{
    console.log("Clicked");
    document.getElementById('darkMode').style.display = 'none'
    document.getElementById('lightMode').style.display = 'block'
    document.getElementById('bar').style.borderColor = 'white'
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
});


// Creating a slide animation
let newImages = [
  'download.png',
  'sideview.png',
  'warrior.png'
]

var slideIndex = 0;
showSlides();

function showSlides() {
  slideIndex++;
  var i;
  var slides = document.getElementsByClassName("currentSlide");
  // console.log(slides[1]);
  
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // console.log("the current slide is " + slideIndex);
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  for( i = 0; i < slideNumber.length; i++){
    slideNumber[i].innerHTML = '0' + slideIndex
  }
  slideCont.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(./assets/" + newImages[slideIndex-1] + ")";
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
};

var slideIndex = 1;
newSlide(slideIndex);

// Thumbnail image controls

function changeSlide(n) {
  newSlide(slideIndex = n);
};


function newSlide(n) {
  var i;
  var slides = document.getElementsByClassName("currentSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  };
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  };
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  for( i = 0; i < slideNumber.length; i++){
    slideNumber.innerHTML = '0' + slideIndex
  }
};

let currentLink = document.getElementsByClassName("signin");

for( i = 0; i < currentLink.length; i++){
  currentLink[i].addEventListener('click', function(){
    window.location.href = "signUp.html"
  });
};
