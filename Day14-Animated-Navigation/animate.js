let btn = document.getElementById('btn');
let nav = document.getElementById('nav');
btn.onclick = ()=>{ load()};
function load(){
  if(nav.className.includes('active')){
    nav.classList.remove('active');
  }else{
    nav.classList.add('active');
  }
}