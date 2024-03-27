let toggles = document.querySelectorAll('.toggle');
let good = document.querySelector('#good');
let fast = document.querySelector('#fast');
let cheap = document.querySelector('#cheap');

toggles.forEach(toggle => toggle.addEventListener('change',(e) => doToggle(e.target)));

function doToggle(target){
  if(good.checked && fast.checked && cheap.checked){
    if(target === good){
      fast.checked = false;
    }
    if(target === fast){
      cheap.checked = false;
    }
    if(target === cheap){
      good.checked = false;
    }
  }
}