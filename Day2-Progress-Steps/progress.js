let circles = document.querySelectorAll('.circles');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let dush = document.querySelector('.progress-dush');

let currentActive = 1;

nextBtn.onclick =function(){
  currentActive++;
  if(currentActive>circles.length){
    currentActive = circles.length;
  }
  updata();
};

prevBtn.onclick =function(){
  currentActive--;
  if(currentActive<1){
    currentActive = 1;
  }
  updata();
};

function updata(){
  dush.style.width = (currentActive-1)/(circles.length-1) * 100 +"%";
  if(currentActive==1){
    prevBtn.classList.add('disabled');
    prevBtn.disabled = true;
  }else if(currentActive==circles.length){
    nextBtn.classList.add('disabled');
    nextBtn.disabled = true;
  }else{
    nextBtn.classList.remove('disabled');
    prevBtn.classList.remove('disabled');
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
  circles.forEach((circle,int)=>{
    if(currentActive > int){
      circle.classList.add('active');
    }else{
      circle.classList.remove('active');
    }
  });
}
