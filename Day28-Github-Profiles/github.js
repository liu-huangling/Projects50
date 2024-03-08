const API = "https://api.github.com/users/";
let form = document.getElementById("form");
let search = document.getElementById("search");
let main = document.getElementById("main");

async function getData(username){
  try{
    const { data } = await axios(API + username);
    createCard(data);
    getProject(username);
  }catch(err){
    console.log(err);
    if(err.response.status ==404){
      createErrorCard('No Profile With Username');
    }
  }
}
function createCard(data){
  console.log(data)
    main.innerHTML = `<section class="card">
    <div class="card-head-sticker">
      <img src="${data.avatar_url}" alt="${data.name}">
    </div>
    <div class="card-text-content">
      <h2>${data.name}</h2>
      <p>${data.bio}</p>
      <div class="text-detail">
        <span>${data.followers}<strang>Followers</strang></span>
        <span>${data.following}<strang>Following</strang></span>
        <span>${data.public_repos}<strang>Repos</strang></span>
      </div>
      <div id="repos" class="project-title"></div>
    </div>
  </section>`;
}

function createErrorCard(msg){
  main.innerHTML = `<section class="card">
    <h1>${msg}</h1>
  </section>`;
}

async function getProject(username){
  try{
    const { data } = await axios(API + username + "/repos?sort=created");
    addCard(data);
  }catch(err){
    console.log(err);
    createErrorCard('Problem fetching repos');
  }
}
function addCard(reposData){
  console.log(reposData)
  let repos = document.getElementById("repos");
  reposData.slice(0,10).forEach((repo)=>{
    let repoLink = document.createElement("a");
    repoLink.classList.add('links');
    repoLink.href = repo.html_url;
    repoLink.target = "_balnk";
    repoLink.innerText = repo.name;
    repos.appendChild(repoLink)
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  let user = search.value;
  if(user){
    getData(user);
    search.value="";
  }
};
