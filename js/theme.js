let lightMode = document.getElementsByClassName("lightMode");
let darkMode = document.getElementsByClassName("darkMode");


console.log(darkMode);

// Function for lightMode

for( i = 0; i < lightMode.length; i++){
    lightMode[i].addEventListener('click', ()=>{
        for( i = 0; i < lightMode.length; i++){
            lightMode[i].style.display = 'none'
    }
        for( i = 0; i < darkMode.length; i++){
        darkMode[i].style.display = 'block'
    }    
        document.getElementById('bar').style.borderColor = 'black'
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    
    });
}

// Function for DarkMode

for( i = 0; i < darkMode.length; i++){
    darkMode[i].addEventListener('click', ()=>{
        for( i = 0; i < darkMode.length; i++){
            darkMode[i].style.display = 'none'
    }
        for( i = 0; i < lightMode.length; i++){
        lightMode[i].style.display = 'block'
    }
        document.getElementById('bar').style.borderColor = 'white'
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    });
}

