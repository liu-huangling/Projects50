let textDom = document.getElementById("text");
let speedDom = document.getElementById("speed");

let text = "We are family...";
let index = 0;
let speed = 300/speedDom.value ; 

writeText();

function writeText() {
    textDom.innerText = text.slice(0, index)

    index++

    if(index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)
}


speedDom.addEventListener('input', (e) => speed = 300 / e.target.value)