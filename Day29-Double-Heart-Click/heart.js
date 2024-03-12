let clickDom = document.querySelector('.bg-image');
let times = document.getElementById("times");

let currentInx = 0;
let clickTime = 0;

clickDom.onclick = function(e) {
  // 計算時間差
   if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
};

const createHeart = (e) => {
  console.log(e)
  let heart = document.createElement('i');
  heart.className = "fas fa-heart";
  
  let x = e.clientX;
  let y = e.clientY;
    
  let leftOffset = e.target.offsetLeft;
  let topOffset = e.target.offsetTop;

  let x2= x - leftOffset;
  let y2 = y - topOffset;
  
  console.log(x2)
  console.log(y2)
  
  heart.style.top = y2 + "px";
  heart.style.left = x2 + "px";

  clickDom.appendChild(heart)

  times.innerHTML = ++currentInx;

  setTimeout(() => heart.remove(), 1000)
  
}