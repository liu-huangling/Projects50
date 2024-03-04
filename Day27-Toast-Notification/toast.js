let toasts = document.getElementById("toasts");
let addBtn =  document.getElementById("addBtn");

let noif = ["message one","message two","message three","message four"];
let color = ["info","success","danger"];

addBtn.onclick = () => {createInfo();};

function createInfo(Message = null,ClassName = null){
  let div = document.createElement('div');
  div.classList.add('toast');
  div.classList.add(ClassName ? ClassName: getRandomClass());
  div.innerText = Message ? Message : getRandomText();
  toasts.appendChild(div);
  
  setTimeout(()=>{div.remove();},3000);
}

function getRandomText(){
  return noif[Math.floor(Math.random() * noif.length)];
}
function getRandomClass(){
  return color[Math.floor(Math.random() * color.length)];
}