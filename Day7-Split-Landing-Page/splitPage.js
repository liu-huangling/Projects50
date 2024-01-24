let left = document.querySelector('.left');
let right = document.querySelector('.right');
let main = document.querySelector('.main');

left.addEventListener('mousemove',()=>{
  main.classList.add('show-left');
});
left.addEventListener('mouseleave',()=>{
  main.classList.remove('show-left');
});

right.addEventListener('mousemove',()=>{
  main.classList.add('show-right');
});
right.addEventListener('mouseleave',()=>{
  main.classList.remove('show-right');
});