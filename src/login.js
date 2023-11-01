// file login.js

function login(navigateTo) {
  const section = document.createElement("section");
  section.setAttribute("id", "sectionLogin"); //agregamos id

  //Logo
  const imgLogo = document.createElement("img");
  imgLogo.src =
    "https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true";
  imgLogo.alt = "Logo de Drink Atlas";
  imgLogo.id = "drink2";
 

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

  //Funcion boton iniciar con google 
  const buttonGoogle = document.createElement("button"); //creamos el boton
  buttonGoogle.textContent = "Iniciar sesión con Google"; //agregamos nombre al boton
  buttonGoogle.setAttribute("id", "btnGoogle"); //agregamos id
  buttonGoogle.addEventListener('click', () => {
    // Inicia sesión con Google
    signInWithPopup(auth, Provider.Google)
      .then((result) => {
        // El usuario ha iniciado sesión correctamente
        console.log(result);
      })
      .catch((error) => {
        // Se produjo un error al iniciar sesión
        console.error(error);
      });
  });

 



  //Función botón regresar
  const buttonReturnLogin = document.createElement("button"); //falta crear evento
  buttonReturnLogin.textContent = "Regresar";
  buttonReturnLogin.setAttribute("id", "btnReturnLogin"); //agregamos id
  buttonReturnLogin.addEventListener("click", () => {
    //evento
    navigateTo("/");
  });

  section.append(imgLogo, title, form, inputEmail, inputPass, buttonLogin, buttonGoogle, buttonReturnLogin);
  return section;
}
export default login;
