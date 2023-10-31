// file login.js

function login(navigateTo) {
  const section = document.createElement("section");
  section.setAttribute("id", "sectionLogin"); //agregamos id

  //Logo
  const img = document.createElement("img");
  img.src =
    "https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true";
  img.alt = "Logo de Drink Atlas";
  img.id = "drink2";
  document.body.appendChild(img); //agregamos el documeto de imagen al documento body

  //Título de Login 
  const title = document.createElement("h2");
  title.setAttribute("id", "titleLogin"); //agregamos id
  title.textContent = "Iniciar sesión:";

  //Input para correo y contraseña al iniciar sesión
  const form = document.createElement("form");
  //Correo
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("id", "inputEmail"); //agregamos id
  inputEmail.placeholder = "Ingresar correo";
  //Contraseña
  const inputPass = document.createElement("input");
  inputPass.setAttribute("id", "inputPass"); //agregamos id
  inputPass.placeholder = "Ingresar contraseña";

  //Función botón Login
  const buttonLogin = document.createElement("button"); //creamos el  boton
  buttonLogin.textContent = "Ingresar"; //agregamos nombre al boton
  buttonLogin.setAttribute("id", "btnLogin"); //agregamos id
  buttonLogin.addEventListener("click", () => {
    //evento
    navigateTo("/");
  });

  //Función botón regresar
  const buttonReturn = document.createElement("button"); //falta crear evento
  buttonReturn.textContent = "Regresar";
  buttonReturn.setAttribute("id", "btnReturn"); //agregamos id
  buttonReturn.addEventListener("click", () => {
    //evento
    navigateTo("/");
  });

  section.append(img, title, form, inputEmail, inputPass, buttonLogin, buttonReturn);
  return section;
}
export default login;
