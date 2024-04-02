const box = document.getElementById('box');
let num = 500;

for(var a = 0 ; a <num;a++){
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  box.appendChild(square);
}

function setColor(dom) {
   const color = randomColor();
   dom.style.background = color;
   dom.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(dom) {
   dom.style.background = '#1d1d1d';
   dom.style.boxShadow = '0 0 2px #000';
}

// 隨機顏色
function randomColor() {
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    return color;
}
