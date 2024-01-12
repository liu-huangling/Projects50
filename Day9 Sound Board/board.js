let sounds =["applause","boo","gasp","tada","victory","wrong"];
sounds.forEach((sound)=>{
    let btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML=sound.toUpperCase();

    document.getElementById('btn').appendChild(btn);

    btn.onclick = function(){
        stopSounds();
        document.getElementById(sound).play();
    }
    
});

function stopSounds(){
    sounds.forEach((sound)=>{
        
        document.getElementById(sound).pause();
        document.getElementById(sound).currentTime = 0;
          
    });
}