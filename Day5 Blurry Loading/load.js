let bg = document.querySelector('.bg');
let loadingText = document.querySelector('.loadingText');
let load = 0;

let setInter =setInterval(blur, 30);

function blur(){
  load++;
  if(load>99){
     clearInterval(setInter);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  console.log(bg.style.filter)
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}