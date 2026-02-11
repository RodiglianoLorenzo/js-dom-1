const imageEl = document.querySelector("img")
console.log(imageEl);

const buttonEl = document.querySelector("button")
console.log(buttonEl);

let isOn = false;
console.log(isOn);


function check_lamp_status(){
    if (isOn === false){
        imageEl.src = "yellow_lamp.png"
        buttonEl.innerHTML = "spegni"
        isOn = true;
    } else {
        imageEl.src = "white_lamp.png"
        buttonEl.innerHTML = "accendi"
        isOn = false;
    }
}

buttonEl.onclick = function(){
    check_lamp_status()
}