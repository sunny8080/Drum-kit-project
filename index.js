
let drumButtons = document.querySelectorAll(".drum");

// Detecting button press
for( let i=0; i<drumButtons.length; i++ ){
    drumButtons[i].addEventListener("click", function (){
        let buttonsInnerHtml = this.innerHTML;
        makeSound(buttonsInnerHtml);

        buttonAnimation(buttonsInnerHtml);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Detecting keypress
function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            (new Audio("./sounds/tom-3.mp3")).play();
            break;
        case "d":
            (new Audio("./sounds/tom-4.mp3")).play();
            break;
        case "j":
            (new Audio("./sounds/snare.mp3")).play();
            break;
        case "k":
            (new Audio("./sounds/crash.mp3")).play();
            break;
        case "l":
            (new Audio("./sounds/kick-bass.mp3")).play();
            break;
    
        default: console.log(buttonsInnerHtml); 
            break;
    }
}

function buttonAnimation( currentKey ){
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

