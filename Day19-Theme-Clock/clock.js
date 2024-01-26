let button = document.getElementById("cutover");
let main = document.getElementById("main");
button.onclick = () =>{
  main.className.includes('dark')?main.classList.remove('dark'):main.classList.add('dark');
};

function setTime() {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMin = date.getMinutes();
    let currentSec = date.getSeconds();
  
    let unitAngle = 360 / 60;
    let uniteHourAngle = 360 / 12; 
  
    let secAngle = unitAngle * currentSec;
    let minAngle = unitAngle * currentMin + currentSec / 60 * unitAngle;
    let hourAngle = uniteHourAngle * currentHour  + currentMin / 60 * unitAngle;
  
    console.log(date.getDate());
  
    let mins = date.getMinutes()<=9? "0"+date.getMinutes():date.getMinutes();
    document.getElementById("times").innerHTML = date.getHours() + " : " + mins;
  
    document.getElementById("sec").style.transform = `translate(-25%,-50%) rotate(${secAngle}deg)`;
    document.getElementById("min").style.transform = `translate(-25%,-50%) rotate(${minAngle}deg)`;
    document.getElementById("hours").style.transform = `translate(-35%,-50%) rotate(${hourAngle}deg)`;
 }
setInterval(setTime, 1000);