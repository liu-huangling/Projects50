let btn = document.querySelectorAll('.collapse > button');

btn.forEach((item)=>{
  item.addEventListener('click',collapse);
})

function collapse(){
  console.log(this) // 單個btn
  let collapseBox = this.parentNode;
  if(collapseBox.className.includes('active')){
    collapseBox.classList.remove('active');
  }else{
    collapseBox.classList.add('active');
  }
}
