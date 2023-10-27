// file login.js

function login() {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');//Falta crear evento
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');//falta crear evento
  inputEmail.placeholder = 'Ingresa tu correo';
  inputPass.placeholder = 'contraseña';
  title.textContent = 'login';
  buttonLogin.textContent = 'ir';
  buttonReturn.textContent = 'regresar';

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, form, buttonReturn);
  return section;
}
export default login;
