// API Data  " themoviedb "
let MovieApi = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
let ImgPath = 'https://image.tmdb.org/t/p/w1280';
let SearchApi = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';


let moiveGroup = document.getElementById("moiveGroup");
let form = document.getElementById("form");
let search = document.getElementById("search");

getMovieData(MovieApi)
async function getMovieData(url){
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  showMovies(data.results)
}
function showMovies(data){
  moiveGroup.innerHTML = '';
  data.forEach((movie) => {
        let { title,original_title, poster_path, vote_average, overview } = movie; // 集合

        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        movieDiv.innerHTML = `
            <img src="${ImgPath + poster_path}" alt="${title}">
            <div class="movie-info">
              <h2>${original_title}</h2>
              <span class="${getClassName(vote_average)}">${vote_average}</span>
            </div>
            <div class="overflow">${overview}</div>
        `;
        moiveGroup.appendChild(movieDiv);
    })
}

function getClassName(average){
   if(average >= 8) {
        return 'green'
    } else if(average >= 5) {
        return 'yellow'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchData = search.value;
    if(searchData && searchData !== '') {
        getMovieData(SearchApi + searchData);
        search.value = '';
    } else {
        window.location.reload();
    }
})