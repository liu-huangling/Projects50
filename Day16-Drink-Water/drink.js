let smallCups = document.querySelectorAll('.small-cup');
let totalText = document.getElementById('totalText');
let currentText = document.getElementById('currentText');

fullCups();

smallCups.forEach((item,idx)=>{
    item.onclick = () => { highLight(idx)};
});

function highLight(idx){
  if(smallCups[idx].classList.contains('fill') && !smallCups[idx].nextElementSibling.classList.contains('fill')){
    idx--;
  }
  smallCups.forEach((cup,idx2)=>{
    if(idx >= idx2){
      cup.classList.add('fill');
    }else{
      cup.classList.remove('fill');
    }
  });
  fullCups()
}

function fullCups(){
  let fillCups = document.querySelectorAll('.small-cup.fill').length;
  let totalCups =  smallCups.length;
  
  if(fillCups === 0){
    currentText.style.visbility = 'hidden';
    currentText.style.height =0;
  }else{
    currentText.innerHTML = `${fillCups/totalCups*100}%`;
    currentText.style.visbility = 'visible';
    currentText.style.height = `${fillCups/totalCups*300}px`;
  }
  
  if(fillCups === totalCups){
    totalText.style.visbility = 'hidden';
    totalText.style.height = 0;
  }else{
    totalText.style.visbility = 'visible';
    totalText.innerHTML = `${2-(fillCups *250 /1000)}L`;
    totalText.style.height = `${300-(fillCups/totalCups*300)}px`;
  }
}