import { createUser } from "../lib";

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
title.textContent = "Crea tu cuenta:";

//Input para nombre de usuario, correo y crear contraseña
const form = document.createElement("form");
/* //Nombre de usuario
const inputUserName = document.createElement("input");
inputUserName.setAttribute("id", "inputUserName"); //agregamos id
inputUserName.placeholder = "Ingresa un nombre de usuario"; */

//Correo
const inputNewEmail = document.createElement("input");
inputNewEmail.setAttribute("id", "inputNewEmail"); //agregamos id
inputNewEmail.placeholder = "Ingresa un correo";

//Crear contraseña
const inputCreatePass = document.createElement("input");
inputCreatePass.setAttribute("id", "inputCreatePass"); //agregamos id
inputCreatePass.placeholder = "Ingresa una contraseña";
inputCreatePass.type = "password"; // para que no se vea las letras al colocar la contraseña

//Funciones para validar correo y contraseña
function isValidEmail(email) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  // Puedes personalizar tus reglas de validación aquí
  return password.length >= 8 && /\d/.test(password); // Al menos 8 caracteres y al menos un número
}

//Función botón para registrarse
const buttonRegister = document.createElement("button"); //creamos el  boton
buttonRegister.textContent = "Registrarme"; //agregamos nombre al boton
buttonRegister.setAttribute("id", "btnRegister"); //agregamos id
buttonRegister.addEventListener('click', () => {
  /* const userName = inputUserName.value; */
  const email = inputNewEmail.value; 
  const password = inputCreatePass.value;

  // Validar el formato del correo electrónico
  const isEmailValid = isValidEmail(email);
  
  // Validar la contraseña
  const isPasswordValid = isValidPassword(password);

  if (!isEmailValid || !isPasswordValid) {
    // Mostrar un mensaje de error o un modal de validación
    if (!isEmailValid) {
      // Mensaje de error para el formato de correo
      modalRegisterEmail.style.display = "block";
    }
    if (!isPasswordValid) {
      // Mensaje de error para la contraseña
      modalRegisterPass.style.display = "block";
    }
  } else {
    // Llamar a la función para registrar al usuario
  createUser(email, password).then(res => navigateTo('/homepage'));
  }
});

//Modal formato de correo no válido
const modalRegisterEmail = document.createElement("div");
modalRegisterEmail.setAttribute("id", "modalRegisterEmail");
modalRegisterEmail.style.display = "none"; // Ocultar el modal inicialmente
document.body.appendChild(modalRegisterEmail);

modalRegisterEmail.innerHTML = `
<div class="modal-content">
  <span class="close" id="closeModal">&times;</span>
  <p>El formato del correo electrónico no es válido.</p>
</div>
`;

modalRegisterEmail.querySelector("#closeModal").addEventListener("click", () => {
  modalRegisterEmail.style.display = "none"; // Cerrar el modal al hacer clic en el botón de cierre
});

//Modal contraseña invalida
const modalRegisterPass = document.createElement("div");
modalRegisterPass.setAttribute("id", "modalRegisterPass");
modalRegisterPass.style.display = "none"; // Ocultar el modal inicialmente
document.body.appendChild(modalRegisterPass);

modalRegisterPass.innerHTML = `
<div class="modal-content">
  <span class="close" id="closeModal">&times;</span>
  <p>La contraseña debe tener al menos 8 caracteres y contener números.</p>
</div>
`;

modalRegisterPass.querySelector("#closeModal").addEventListener("click", () => {
  modalRegisterPass.style.display = "none"; // Cerrar el modal al hacer clic en el botón de cierre
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
 section.append(img, title, form, inputNewEmail, inputCreatePass,  buttonRegister, buttonReturnRegister);
  return section;
}
export default register;