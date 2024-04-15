let btn = document.querySelectorAll(".btn");
let img = document.querySelectorAll(".img");


btn.forEach((item,ins)=>{
  item.addEventListener('click',()=>{
    hiddenBtnAndImg();
    clickItem(item,ins);
  });
});

function clickItem(dom,int){
  dom.classList.add('active');
  img[int].classList.add('show');
}
function hiddenBtnAndImg(){
  btn.forEach(item=>{item.classList.remove('active')});
  img.forEach(item=>{item.classList.remove('show')});
}