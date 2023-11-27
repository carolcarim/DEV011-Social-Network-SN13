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

  // Modal correo invalido
  const modalLogin = document.createElement('div');
  modalLogin.setAttribute('id', 'modalLogin');
  modalLogin.style.display = 'none'; // Ocultar el modal inicialmente
  document.body.appendChild(modalLogin);

  modalLogin.innerHTML = `
  <div class="modal-content">
    <span class="close" id="closeModal">&times;</span>
    <p>El correo ingresado no es inválido.</p>
  </div>
`;

  modalLogin.querySelector('#closeModal').addEventListener('click', () => {
    modalLogin.style.display = 'none'; // Cerrar el modal al hacer clic en el botón de cierre
  });

  // Modal contraseña invalida
  const modalLoginPass = document.createElement('div');
  modalLoginPass.setAttribute('id', 'modalLoginPass');
  modalLoginPass.style.display = 'none'; // Ocultar el modal inicialmente
  document.body.appendChild(modalLoginPass);

  modalLoginPass.innerHTML = `
  <div class="modal-content">
    <span class="close" id="closeModal">&times;</span>
    <p>La contraseña ingresada es inválida.</p>
  </div>
`;

  modalLoginPass.querySelector('#closeModal').addEventListener('click', () => {
    modalLoginPass.style.display = 'none'; // Cerrar el modal al hacer clic en el botón de cierre
  });

  // Modal usuario no encontrado
  const modalLoginUser = document.createElement('div');
  modalLoginUser.setAttribute('id', 'modalLoginUser');
  modalLoginUser.style.display = 'none'; // Ocultar el modal inicialmente
  document.body.appendChild(modalLoginUser);

  modalLoginUser.innerHTML = `
  <div class="modal-content">
    <span class="close" id="closeModal">&times;</span>
    <p>Usuario no encontrado.</p>
  </div>
`;

  modalLoginUser.querySelector('#closeModal').addEventListener('click', () => {
    modalLoginUser.style.display = 'none'; // Cerrar el modal al hacer clic en el botón de cierre
  });

  // Función botón Login
  const buttonLogin = document.createElement('button'); // creamos el  boton
  buttonLogin.textContent = 'Ingresar'; // agregamos nombre al boton
  buttonLogin.setAttribute('id', 'btnLogin'); // agregamos id
  buttonLogin.addEventListener('click', async () => {
    const password = document.getElementById('inputPass').value;
    const email = document.getElementById('inputEmail').value;
    signInUsers(email, password).then((cred) => {
      console.log(cred);
      navigateTo('/homepage');
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        modalLogin.style.display = 'block';
      } else if (errorCode === 'auth/wrong-password') {
        modalLoginPass.style.display = 'block';
      } else if (errorCode === 'auth/user-not-found') {
        modalLoginUser.style.display = 'block';
      }
    });
  });
  // Funcion boton iniciar con google
  const buttonGoogle = document.createElement('button'); // creamos el boton
  buttonGoogle.textContent = 'Iniciar sesión con Google'; // agregamos nombre al boton
  buttonGoogle.setAttribute('id', 'btnGoogle'); // agregamos id
  buttonGoogle.addEventListener('click', () => {
    call_login_google().then((res) => navigateTo('/homepage'));
    console.log(res);
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
