
let showMenu = document.getElementById("showMenuBtn");
let hideMenu = document.getElementById("hideMenuBtn");
let mobileNav = document.getElementById("mobile-nav-cont")


showMenu.addEventListener('click', function(){
  showMenu.style.display = "none";
  hideMenu.style.display = "flex"
  mobileNav.style.display = "flex";
})

hideMenu.addEventListener('click', function(){
  showMenu.style.display = "flex";
  hideMenu.style.display = "none"
  mobileNav.style.display = "none";
})

// Function for lightMode

document.getElementById("lightMode").addEventListener('click', ()=>{
    console.log("Clicked");
    document.getElementById('lightMode').style.display = 'none'
    document.getElementById('darkMode').style.display = 'block'
    document.getElementById('bar').style.borderColor = 'black'
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'

})

// Function for DarkMode

document.getElementById("darkMode").addEventListener('click', ()=>{
    console.log("Clicked");
    document.getElementById('darkMode').style.display = 'none'
    document.getElementById('lightMode').style.display = 'block'
    document.getElementById('bar').style.borderColor = 'white'
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
})


// Creating a slide animation

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("currentSlide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  document.getElementById("number").innerHTML = '0' + slideIndex
  slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

var slideIndex = 1;
newSlide(slideIndex);

// Thumbnail image controls

function changeSlide(n) {
  newSlide(slideIndex = n);
}

function newSlide(n) {
  var i;
  var slides = document.getElementsByClassName("currentSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  document.getElementById("number").innerHTML = '0' + slideIndex
}

let currentLink = document.getElementsByClassName("signin");

for( i = 0; i < currentLink.length; i++){
  currentLink[i].addEventListener('click', function(){
    window.location.href = "signUp.html"
  })
}

