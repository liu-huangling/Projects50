let jokeBtn = document.getElementById('jokeBtn');
let jokeDiv = document.getElementById('jokes');

jokeBtn.onclick = ()=>getJoke();

getJoke();
function getJoke(){
  fetch('https://icanhazdadjoke.com',{
    headers:{
      Accept: 'application/json',
    }
  }).then((res)=>res.json())
    .then((data)=>{
    console.log(data)
    jokeDiv.innerHTML = data.joke;
  });
}