
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



// Creating a slide animation
let newImages = [
  'download.png',
  'sideview.png',
  'warrior.png'
]
        var slideIndex = 0;
        function showSlidesWithOverlay() {
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
        setTimeout(showSlidesWithOverlay, 4000); // Change image every 4 seconds
        };

        var slideIndex = 0;
        function showSlidesWithNoOverlay() {

          // Increament slideIndex
        slideIndex++;
        var i;

        // getting the images to use for slide
        var slides = document.getElementsByClassName("currentSlide");        
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }        
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Checking if the slideIndex is higher than the number of slides and seeting it back to 1
        if (slideIndex > slides.length) {slideIndex = 1}

        // Looping through to display the number of slide on the page
        for( i = 0; i < slideNumber.length; i++){
            slideNumber[i].innerHTML = '0' + slideIndex
        }

        // setting the current slide to the slide container
        slideCont.style.backgroundImage = "url(./assets/" + newImages[slideIndex-1] + ")";
        slides[slideIndex-1].style.display = "flex";
        dots[slideIndex-1].className += " active";
        
        setTimeout(showSlidesWithNoOverlay, 4000); // Change image every 4 seconds
        };

        var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        function determineTypeOfBackground() {
          if( screenWidth < 500 ){
            showSlidesWithOverlay();
          }else{
            showSlidesWithNoOverlay();
          }

          // setTimeout(determineTypeOfBackground, 10000) 
        }

        determineTypeOfBackground();


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

let signupLink = document.getElementsByClassName("signin");
let loginLink = document.getElementsByClassName("login");

for( i = 0; i < signupLink.length; i++){
  signupLink[i].addEventListener('click', function(){
    window.location.href = "signUp.html"
  });
};

for( i = 0; i < loginLink.length; i++){
  loginLink[i].addEventListener('click', function(){
    window.location.href = "login.html"
  });
};


function checkWidth() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width);

  setTimeout(checkWidth, 3000)
}


// checkWidth()