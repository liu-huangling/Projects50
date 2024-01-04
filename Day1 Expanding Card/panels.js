let panels = document.querySelectorAll('.panels');
panels.forEach((panel)=>{
    panel.onclick = function(){
        removeClass();
        panel.classList.add('active');
    }
});

function removeClass() { 
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    });
 };