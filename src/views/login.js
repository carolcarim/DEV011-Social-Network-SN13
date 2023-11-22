// eslint-disable-next-line camelcase
import { call_login_google, signInUsers } from '../lib/auth';

function login(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionLogin'); // agregamos id

  // Logo
  const imgLogo = document.createElement('img');
  imgLogo.src = 'https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true';
  imgLogo.alt = 'Logo de Drink Atlas';
  imgLogo.id = 'drink2';

  // Título de Login
  const title = document.createElement('h2');
  title.setAttribute('id', 'titleLogin'); // agregamos id
  title.textContent = 'Iniciar sesión:';

  // Input para correo y contraseña al iniciar sesión
  const formLogin = document.createElement('formLogin');

  // Correo
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('id', 'inputEmail'); // agregamos id
  inputEmail.placeholder = 'Ingresar correo...';

  // Contraseña
  const inputPass = document.createElement('input');
  inputPass.setAttribute('id', 'inputPass'); // agregamos id
  inputPass.placeholder = 'Ingresar contraseña...';
  inputPass.type = 'password'; // para que no se vea las letras al colocar la contraseña

  // Función botón Login
  const buttonLogin = document.createElement('button'); // creamos el  boton
  buttonLogin.textContent = 'Ingresar'; // agregamos nombre al boton
  buttonLogin.setAttribute('id', 'btnLogin'); // agregamos id
  buttonLogin.addEventListener('click', async () => {
    const password = document.getElementById('inputPass').value;
    const email = document.getElementById('inputEmail').value;
    signInUsers(email, password).then((cred) => {
      navigateTo('/homepage');
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        alert('El correo no es valido');
      } else if (errorCode === 'auth/user-not-found') {
        alert('Usuario no logueado');
      } else if (errorCode === 'auth/wrong-password') {
        alert('La contraseña es incorrecta');
      }
    });
  });
  // Funcion boton iniciar con google
  const buttonGoogle = document.createElement('button'); // creamos el boton
  buttonGoogle.textContent = 'Iniciar sesión con Google'; // agregamos nombre al boton
  buttonGoogle.setAttribute('id', 'btnGoogle'); // agregamos id
  buttonGoogle.addEventListener('click', () => {
    call_login_google().then((res) => navigateTo('/homepage'));
  });

  // Función botón regresar
  const buttonReturnLogin = document.createElement('button'); // falta crear evento
  buttonReturnLogin.textContent = 'Regresar';
  buttonReturnLogin.setAttribute('id', 'btnReturnLogin'); // agregamos id
  buttonReturnLogin.addEventListener('click', () => {
    // evento
    navigateTo('/');
  });

  // eslint-disable-next-line max-len
  section.append(
    imgLogo,
    title,
    formLogin,
    inputEmail,
    inputPass,
    buttonLogin,
    buttonGoogle,
    buttonReturnLogin,
  );
  return section;
}
export default login;
