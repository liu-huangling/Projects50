const addBtn = document.getElementById("addNote");
const historyNote = JSON.parse(localStorage.getItem('notes'));

if(historyNote){
  historyNote.forEach(oldNote=>(addNote(oldNote)));
}

addBtn.onclick=()=>{addNote()};

function addNote(text = ''){
  let section = document.createElement('section');
  section.classList.add('note');
  section.innerHTML =`<div class="setting">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
  </div>
  <div class="noteText ${text ? "" : "hidden"}"></div>
  <textarea class="textarea ${text ? "hidden" : ""}"></textarea>`;
   
  document.querySelector('body').appendChild(section);
  
  section.querySelector('.textarea').value = text;
  section.querySelector('.noteText').innerHTML = marked(text);
  
  section.querySelector('.textarea').addEventListener('input',(e)=>{
    const { value } = e.target;
    section.querySelector('.noteText').innerHTML = marked(value);
    detectInput();
  });
  section.querySelector('.fa-pen-to-square').addEventListener('click',(e)=>{
    let noteDiv = section.querySelector('.noteText');
    let noteTextarea = section.querySelector('.textarea');
    noteDiv.className.includes('hidden')?noteDiv.classList.remove('hidden'):noteDiv.classList.add('hidden');
    noteTextarea.className.includes('hidden')?noteTextarea.classList.remove('hidden'):noteTextarea.classList.add('hidden');
    detectInput();
  });
  section.querySelector('.fa-trash').addEventListener('click',(e)=>{
    section.remove();
    detectInput();
  });
  
}

function detectInput(){
  const noteTextarea = document.querySelectorAll('.textarea');
  const notes = [];
  noteTextarea.forEach(note => notes.push(note.value));
  localStorage.setItem('notes', JSON.stringify(notes));
}