let close = document.getElementById('close');
let bars = document.getElementById('bars');
let circleGroup = document.querySelector('.circleGroup');
let section = document.querySelector('.section');
close.onclick =function(){
  circleGroup.classList.remove('show-nav');
  section.classList.remove('show-nav');
};
bars.onclick =function(){
  circleGroup.classList.add('show-nav');
  section.classList.add('show-nav');
};