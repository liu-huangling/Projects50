let Cards = document.querySelectorAll('.card');

window.addEventListener('scroll',checkbox);

checkbox();
function checkbox(){
  let innerHeight = window.innerHeight;
   Cards.forEach((card,int)=>{
    console.log(card,int)
     const boxTop = card.getBoundingClientRect().top;
     if(boxTop < innerHeight){
       card.classList.add('show');
     }else{
       card.classList.remove('show');
     }
  });
}

