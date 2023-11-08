import { createPost, querySnapshot, paintRealTime} from "../lib/index.js";

function homepage(navigateTo) {
    const section = document.createElement("section");
    section.setAttribute("id", "sectionHomepage"); //agregamos id

//Título de Login 
/* const titleHomepage = document.createElement("h2");
titleHomepage.setAttribute("id", "titleHomepage"); //agregamos id
titleHomepage.textContent = "¿Qué quieres publicar?"; */

//Logo para el Inicio
const imgLogoHp = document.createElement("img");
imgLogoHp.src =
  "https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true";
imgLogoHp.alt = "Logo de Drink Atlas";
imgLogoHp.id = "drink4";

//Div para menú
const menuBar = document.createElement("div");
menuBar.setAttribute("id", "menuBarHp"); //agregamos id

//Foto de perfil sobre el Div --> menú
const imgProfilePic = document.createElement("img");
imgProfilePic.src =
  "https://freesvg.org/img/abstract-user-flat-4.png";
imgProfilePic.alt = "Foto perfil del usuario";
imgProfilePic.id = "profilePic";

//Función botón "Crear Post"
const buttonCreatePost = document.createElement("button"); 
buttonCreatePost.textContent = "Publicar";
buttonCreatePost.setAttribute("id", "btnCreatePost");
buttonCreatePost.addEventListener("click", () => {
  const comment = document.getElementById('postHp').value;
  console.log('funciona click', comment);
  createPost(comment); 
  //evento
  //navigateTo("/"); //deberia aparecer un pop-up? para poder publicar... 
});

//Función botón "Crear Post"
const buttonEditPost = document.createElement("button"); 
buttonEditPost.textContent = "Editar";
buttonEditPost.setAttribute("id", "btnEditPost");
buttonEditPost.addEventListener("click", () => {
  //evento
  navigateTo("/"); //deberia aparecer un pop-up? para poder publicar... 
});

//Input para Post
const inputpost = document.createElement("input");
inputpost.setAttribute("id", "postHp"); //agregamos id
inputpost.placeholder = "¿Qué quieres publicar hoy?"

//seccion post
const postSection = document.createElement("article");
postSection.setAttribute("class", "postSection"); //agregamos id

// Agregar post al muro
querySnapshot.then((docs)=>{
  docs.forEach((doc) => {
    console.log(doc.id); 
    console.log(doc.data());
    const post = document.createElement('input');
    post.value = doc.data().comment;
    postSection.append(post); 
  });
})

paintRealTime((querySnapshot) => {
  postSection.textContent = ''; 
  querySnapshot.forEach((doc) => { 
      console.log(doc.id); 
      console.log(doc.data());
      const post = document.createElement('input');
      post.value = doc.data().comment;
      postSection.append(post); 
    }); 
});






section.append(imgLogoHp, menuBar, imgProfilePic, buttonCreatePost, buttonEditPost, inputpost, postSection);
  return section;
}

export default homepage;