const imageEl = document.querySelector("img")
console.log(imageEl);

const buttonEl = document.querySelector("button")
console.log(buttonEl);

function buttonClick() {
    console.log("You click the button:");
    
}

buttonEl.onclick = function() {
    imageEl.src = "yellow_lamp.png"
    buttonEl.innerHTML = "spegni"
}




