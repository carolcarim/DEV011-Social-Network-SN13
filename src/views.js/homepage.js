function homepage(navigateTo) {
    const section = document.createElement("section");
    section.setAttribute("id", "sectionHomepage"); //agregamos id

//Título de Login 
const titleHomepage = document.createElement("h2");
titleHomepage.setAttribute("id", "titleHomepage"); //agregamos id
titleHomepage.textContent = "¿Qué quieres publicar?";

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
  //evento
  navigateTo("/"); //deberia aparecer un pop-up? para poder publicar... 
});

//Función botón "Crear Post"
const buttonEditPost = document.createElement("button"); 
buttonEditPost.textContent = "Editar";
buttonEditPost.setAttribute("id", "btnEditPost");
buttonEditPost.addEventListener("click", () => {
  //evento
  navigateTo("/"); //deberia aparecer un pop-up? para poder publicar... 
});

//Div para Post
const post = document.createElement("div");
post.setAttribute("id", "postHp"); //agregamos id

section.append(titleHomepage, imgLogoHp, menuBar, imgProfilePic, buttonCreatePost, buttonEditPost, post);
  return section;
}
export default homepage;