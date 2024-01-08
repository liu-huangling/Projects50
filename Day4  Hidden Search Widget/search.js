let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let search = document.querySelector('.search');

searchBtn.onclick =function(){
  search.classList.toggle('searching');
  searchInput.focus();
};