let body = document.getElementsByTagName('body')[0];
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
let images = document.querySelectorAll('.image-box');

let ImageNumber = 0;

leftBtn.onclick = () =>{
  ImageNumber--;
  if(ImageNumber < 0){
    ImageNumber = images.length-1;
  }
  Image();
};
rightBtn.onclick = () =>{
  ImageNumber++;
  if(ImageNumber > images.length-1){
    ImageNumber = 0;
  }
  Image();
};
Image();
function Image(){
  images.forEach(image=>{
    image.classList.remove('active');
    images[ImageNumber].classList.add('active');
  });
  $(body).css('background-image',$(images[ImageNumber]).css('background-image'));
}