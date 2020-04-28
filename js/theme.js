let lightMode = document.getElementsByClassName("lightMode");
let darkMode = document.getElementsByClassName("darkMode");
let desktopDarkMode  = document.getElementById("desktopDarkMode");
let desktopLightMode = document.getElementById("desktopLightMode");
let mobileDarkMode = document.getElementById("mobileDarkMode");
let mobileLightMode = document.getElementById("mobileLightMode");

var deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;


// Function for lightMode


// LightMode for Desktop

if( deviceWidth > 500 ){
    for( i = 0; i < lightMode.length; i++){
        lightMode[i].addEventListener('click', ()=>{
            for( i = 0; i < lightMode.length; i++){
                lightMode[i].style.display = 'none'
        }

            desktopDarkMode.style.display = "block"    
            mobileDarkMode.style.display = "none"
            document.getElementById('bar').style.borderColor = 'black'
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        
        });
    }
    
}


// LightMode for Mobile Devices

if( deviceWidth < 500 ){
    for( i = 0; i < lightMode.length; i++){
        lightMode[i].addEventListener('click', ()=>{
            for( i = 0; i < lightMode.length; i++){
                lightMode[i].style.display = 'none'
        }

            desktopDarkMode.style.display = "none"    
            mobileDarkMode.style.display = "block"
            document.getElementById('bar').style.borderColor = 'black'
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
        
        });
    }
    
}

// Function for DarkMode

// DarkMode for Desktop

if( deviceWidth > 500 ){
    for( i = 0; i < darkMode.length; i++){
        darkMode[i].addEventListener('click', ()=>{
            for( i = 0; i < darkMode.length; i++){
                darkMode[i].style.display = 'none'
        }

            desktopLightMode.style.display = "block"
            mobileLightMode.style.display = "none"
            document.getElementById('bar').style.borderColor = 'white'
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        });
    }
    
}


// DarkMode for Mobile devices


if( deviceWidth < 500 ){
    for( i = 0; i < darkMode.length; i++){
        darkMode[i].addEventListener('click', ()=>{
            for( i = 0; i < darkMode.length; i++){
                darkMode[i].style.display = 'none'
        }

            desktopLightMode.style.display = "none"
            mobileLightMode.style.display = "block"
            document.getElementById('bar').style.borderColor = 'white'
            document.body.style.backgroundColor = 'black'
            document.body.style.color = 'white'
        });
    }
    
}