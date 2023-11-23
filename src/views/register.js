import { createUser } from '../lib/auth';

// eslint-disable-next-line import/no-mutable-exports
let registeredUserName = '';

function register(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionRegister'); // agregamos id

  // Logo
  const img = document.createElement('img');
  img.src = 'https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true';
  img.alt = 'Logo de Drink Atlas';
  img.id = 'drink3';
  document.body.appendChild(img); // agregamos el documeto de imagen al documento body

  // Título de Register
  const title = document.createElement('h2');
  title.setAttribute('id', 'titleRegister'); // agregamos id
  title.textContent = 'Crea tu cuenta:';

  // Input para nombre de usuario, correo y crear contraseña
  const form = document.createElement('form');

  // Nombre de usuario
  const inputUserName = document.createElement('input');
  inputUserName.setAttribute('id', 'inputUserName'); // agregamos id
  inputUserName.placeholder = 'Ingresa un nombre de usuario';
  inputUserName.addEventListener('input', (event) => {
    // Actualizar la variable global cuando el usuario escriba en el campo
    registeredUserName = event.target.value;
  });

  // Correo
  const inputNewEmail = document.createElement('input');
  inputNewEmail.setAttribute('id', 'inputNewEmail'); // agregamos id
  inputNewEmail.placeholder = 'Ingresa un correo';

  // Crear contraseña
  const inputCreatePass = document.createElement('input');
  inputCreatePass.setAttribute('id', 'inputCreatePass'); // agregamos id
  inputCreatePass.placeholder = 'Ingresa una contraseña';
  inputCreatePass.type = 'password'; // para que no se vea las letras al colocar la contraseña

  // Modal formato de correo no válido
  const modalRegisterEmail = document.createElement('div');
  modalRegisterEmail.setAttribute('id', 'modalRegisterEmail');
  modalRegisterEmail.style.display = 'none'; // Ocultar el modal inicialmente
  document.body.appendChild(modalRegisterEmail);

  modalRegisterEmail.innerHTML = `
<div class="modal-content">
<span class="close" id="closeModal">&times;</span>
<p>El formato del correo electrónico no es válido.</p>
</div>
`;

  modalRegisterEmail.querySelector('#closeModal').addEventListener('click', () => {
    modalRegisterEmail.style.display = 'none'; // Cerrar el modal al hacer clic en el botón de cierre
  });

  // Modal contraseña invalida
  const modalRegisterPass = document.createElement('div');
  modalRegisterPass.setAttribute('id', 'modalRegisterPass');
  modalRegisterPass.style.display = 'none'; // Ocultar el modal inicialmente
  document.body.appendChild(modalRegisterPass);

  modalRegisterPass.innerHTML = `
<div class="modal-content">
<span class="close" id="closeModal">&times;</span>
<p>La contraseña debe tener al menos 6 caracteres entre letras y números.</p>
</div>
`;

  modalRegisterPass.querySelector('#closeModal').addEventListener('click', () => {
    modalRegisterPass.style.display = 'none'; // Cerrar el modal al hacer clic en el botón de cierre
  });

  // Modal correo ya ha sido registrado
  const modalRegisterError = document.createElement('div');
  modalRegisterError.setAttribute('id', 'modalRegisterError');
  modalRegisterError.style.display = 'none'; // Ocultar el modal inicialmente
  document.body.appendChild(modalRegisterError);

  modalRegisterError.innerHTML = `
<div class="modal-content">
  <span class="close" id="closeModal">&times;</span>
  <p>Error: correo ya ha sido registrado.</p>
</div>
`;

  modalRegisterError.querySelector('#closeModal').addEventListener('click', () => {
    modalRegisterError.style.display = 'none'; // Cerrar el modal al hacer clic en el botón de cierre
  });

  // Función botón para registrarse
  const buttonRegister = document.createElement('button'); // creamos el  boton
  buttonRegister.textContent = 'Registrarme'; // agregamos nombre al boton
  buttonRegister.setAttribute('id', 'btnRegister'); // agregamos id
  buttonRegister.addEventListener('click', () => {
    createUser(inputNewEmail.value, inputCreatePass.value)
    .then(() => {
      console.log('Usuario creado exitosamente');
      navigateTo('/welcome');
    })
    .catch((error) => {
      console.error('Error al crear el usuario:', error);
    })
    });



  // Función botón regresar
  const buttonReturnRegister = document.createElement('button'); // falta crear evento
  buttonReturnRegister.textContent = 'Regresar';
  buttonReturnRegister.setAttribute('id', 'btnReturnRegister'); // agregamos id
  buttonReturnRegister.addEventListener('click', () => {
  // evento
    navigateTo('/');
  });

  // Para agregar los elementos a la seccion
  // eslint-disable-next-line max-len
//   section.append(img, title, form, inputNewEmail, inputCreatePass, buttonRegister, buttonReturnRegister);
//   return section;
// }
// export default register;

/* function register(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionRegister'); // agregamos id

  // Logo
  const img = document.createElement('img');
  img.src = 'https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true';
  img.alt = 'Logo de Drink Atlas';
  img.id = 'drink3';
  document.body.appendChild(img); // agregamos el documeto de imagen al documento body

  // Título de Register
  const title = document.createElement('h2');
  title.setAttribute('id', 'titleRegister'); // agregamos id
  title.textContent = 'Crea tu cuenta:';

  // Input para nombre de usuario, correo y crear contraseña
  const form = document.createElement('form'); */

  /* //Nombre de usuario
const inputUserName = document.createElement("input");
inputUserName.setAttribute("id", "inputUserName"); //agregamos id
inputUserName.placeholder = "Ingresa un nombre de usuario"; */

  /* // Correo
  const inputNewEmail = document.createElement('input');
  inputNewEmail.setAttribute('id', 'inputNewEmail'); // agregamos id
  inputNewEmail.placeholder = 'Ingresa un correo';

  // Crear contraseña
  const inputCreatePass = document.createElement('input');
  inputCreatePass.setAttribute('id', 'inputCreatePass'); // agregamos id
  inputCreatePass.placeholder = 'Ingresa una contraseña';
  inputCreatePass.type = 'password'; // para que no se vea las letras al colocar la contraseña

  // Función botón para registrarse
 /*  const buttonRegister = document.createElement('button'); // creamos el  boton
  buttonRegister.textContent = 'Registrarme'; // agregamos nombre al boton
  buttonRegister.setAttribute('id', 'btnRegister'); // agregamos id
  buttonRegister.addEventListener('click', async () => {
    const password = document.getElementById('inputCreatePass').value;
    const email = document.getElementById('inputNewEmail').value;
    createUser(email, password).then((cred) => {
      navigateTo('/welcome');
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        modalRegisterEmail.style.display = 'block';
      } else if (errorCode === 'auth/email-already-in-use') {
        modalRegisterError.style.display = 'block';
      } else if (errorCode === 'auth/weak-password') {
        modalRegisterPass.style.display = 'block';
      }
    });
  });

  // Función botón regresar
  /* const buttonReturnRegister = document.createElement('button'); // falta crear evento
  buttonReturnRegister.textContent = 'Regresar';
  buttonReturnRegister.setAttribute('id', 'btnReturnRegister'); // agregamos id
  buttonReturnRegister.addEventListener('click', () => {
  // evento
    navigateTo('/');
  }); */

  //Para agregar los elementos a la seccion
  // eslint-disable-next-line max-len
  section.append(img, title, form, inputUserName, inputNewEmail, inputCreatePass, buttonRegister, buttonReturnRegister);
  return section;
}

export { registeredUserName };
export default register;
