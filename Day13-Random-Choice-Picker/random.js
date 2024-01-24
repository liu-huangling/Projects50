let tagDiv = document.getElementById("tags");
let textarea = document.getElementById("textarea");

textarea.addEventListener('keydown',(event)=>{
  
  if(event.code === "Enter" && textarea.value.trim().length !=0){
    tagDiv.innerHTML = "";
    runSpanTags(textarea.value);
    textarea.value = "";
  }
});

function runSpanTags(value){
  let newArr = value.trim().split(',');
  newArr.forEach((items)=>{
    if(items.length!=0){
      let span =  document.createElement('span');
      span.innerText = items;
      span.className = "tag"
      tagDiv.appendChild(span)
      //runTime(span);
    }
  });
  
  let times = 30 ;
  
  let intervalID  = setInterval(function(){ 
    let tag = returnSpan();
    addClass(tag);
    setTimeout(()=>{
      removeClass(tag);
    },150);
  }, 150);
  
  setTimeout(()=>{
    clearInterval(intervalID);
    setTimeout(()=>{
      let tag = returnSpan();
      addClass(tag);
    },150);
  },times *100);
}

function returnSpan(){
  let spans = document.querySelectorAll('.tag');
  return spans[Math.floor(Math.random() * spans.length)];
}

function addClass(dom){
  dom.classList.add('highLight');
}

function removeClass(dom){
  dom.classList.remove('highLight');
}

