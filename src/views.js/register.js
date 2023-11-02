function register(navigateTo) { 
    const section = document.createElement("section");
    section.setAttribute("id", "sectionRegister"); //agregamos id

//Logo
const img = document.createElement("img");
img.src =
  "https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true";
img.alt = "Logo de Drink Atlas";
img.id = "drink3";
document.body.appendChild(img); //agregamos el documeto de imagen al documento body

//Título de Register
const title = document.createElement("h2");
title.setAttribute("id", "titleRegister"); //agregamos id
title.textContent = "Ingresa tus datos para registrarte:";

//Input para nombre de usuario, correo y crear contraseña
const form = document.createElement("form");
//Nombre de usuario
const inputUserName = document.createElement("input");
inputUserName.setAttribute("id", "inputUserName"); //agregamos id
inputUserName.placeholder = "Ingresa un nombre de usuario";
//Correo
const inputNewEmail = document.createElement("input");
inputNewEmail.setAttribute("id", "inputNewEmail"); //agregamos id
inputNewEmail.placeholder = "Ingresa un correo";
//Crear contraseña
const inputCreatePass = document.createElement("input");
inputCreatePass.setAttribute("id", "inputCreatePass"); //agregamos id
inputCreatePass.placeholder = "Ingresa una contraseña";
inputCreatePass.type = "password"; // para que no se vea las letras al colocar la contraseña

//Función botón para registrarse
const buttonRegister = document.createElement("button"); //creamos el  boton
buttonRegister.textContent = "Registrarme"; //agregamos nombre al boton
buttonRegister.setAttribute("id", "btnRegister"); //agregamos id
buttonRegister.addEventListener("click", () => {
  //evento
  navigateTo("/");
});

//Función botón regresar
const buttonReturnRegister = document.createElement("button"); //falta crear evento
buttonReturnRegister.textContent = "Regresar";
buttonReturnRegister.setAttribute("id", "btnReturnRegister"); //agregamos id
buttonReturnRegister.addEventListener("click", () => {
  //evento
  navigateTo("/");
});

 //Para agregar los elementos a la seccion
 section.append(img, title, form, inputUserName, inputNewEmail, inputCreatePass, buttonRegister, buttonReturnRegister);
  return section;
}
export default register;