let rippleBtn = document.querySelector('.ripple');
rippleBtn.onclick = (e) => {
  let xWidth = e.clientX - rippleBtn.offsetLeft;
  let yHeight = e.clientY - rippleBtn.offsetTop;
  
  const span = document.createElement('span');
  span.className = "circle";
  span.style.left = xWidth + "px";
  span.style.top = yHeight + "px";
  
  rippleBtn.appendChild(span);
  
  setTimeout(()=>span.remove(),500);
}