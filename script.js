const input = document.querySelector("#username");
const bio = document.querySelector("#bio");
const seguidores = document.querySelector("#seguidores");
const seguindo = document.querySelector("#seguindo");
const img = document.querySelector("#img");
const username = document.querySelector("#name");
const h1bio = document.querySelector("#h1bio");

async function hello() {
  let data = await fetch(`https://api.github.com/users/${input.value}`).then(
    (res) => res.json()
  );
  if (data.message == "Not Found") {
    username.innerHTML = "Usuario nao encontrado";
    img.src = `./img/user.svg`;
    bio.innerHTML = "Digite outro...";
    h1bio.innerHTML = "";
    seguidores.innerHTML = "";
    seguindo.innerHTML = "";
    input.value = "";
  } else {
    img.src = data.avatar_url;
    bio.innerHTML = data.bio;
    username.innerHTML = data.login;
    h1bio.innerHTML = "Bio";
    seguidores.innerHTML = `seguidores: ${data.followers}`;
    seguindo.innerHTML = `seguindo: ${data.following}`;
    input.value = "";
  }
  console.log(data);
}
