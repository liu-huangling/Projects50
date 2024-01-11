let labels = document.querySelectorAll('.textGroup label');
labels.forEach((label)=>{
  label.innerHTML = label.innerText.split('').map((text,int)=>{
    let spans = `<span style="transition-delay:${int*50}ms" >${text}</span>`;
    return spans;
  }).join('');
});