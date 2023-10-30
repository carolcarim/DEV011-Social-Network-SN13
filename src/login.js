// file login.js

function login(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionLogin') //agregamos

  const title = document.createElement('h2');

  //funcion boton regresar
  const buttonReturn = document.createElement('button'); //creamos el  boton
  buttonReturn.textContent = 'regresar'; //agregamos nombre al boton
  buttonReturn.classList.add('btnReturn'); //añadimos clase 
  buttonReturn.addEventListener('click', () => { //evento 
  navigateTo('/')
  });

  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  //funcion boton login
  const buttonLogin = document.createElement('button');//falta crear evento

  inputEmail.placeholder = 'Ingresa tu correo';
  inputPass.placeholder = 'contraseña';
  title.textContent = 'login';
  buttonLogin.textContent = 'ir';
  

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, form, buttonReturn);
  return section;
}
export default login;

