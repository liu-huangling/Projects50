let doms = document.querySelectorAll('.counter');
doms.forEach((dom)=>{
  dom.innerHTML = '0';
  let update = () =>{
    // "+" --> 可以直接讓字串變成數值
    let value = +dom.getAttribute('data-value');
    let num = +dom.innerHTML;
    
    if(num < value){
      dom.innerHTML = `${Math.ceil(num+(value/200))}`
      setTimeout(update,5);
    }else{
      dom.innerHTML = value;
    }
  }
  update();
});