let Key = document.getElementById('key');
window.addEventListener('keydown',(event)=>{
  // console.log(event)
  Key.innerHTML=`
    <div class="codes">
      <div class="code">
        <small>event.Key</small>
        ${event.key===" "?'Space':event.key}
      </div>
      <div class="code">
        <small>event.KeyCode</small>
        ${event.keyCode}
      </div>
      <div class="code">
        <small>event.code</small>
        ${event.code}
      </div>
    </div>
  `;
});