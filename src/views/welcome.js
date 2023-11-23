function welcome(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionWelcome'); // agregamos id

  // Logo
  const imgLogo = document.createElement('img');
  imgLogo.src = 'https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true';
  imgLogo.alt = 'Logo de Drink Atlas';
  imgLogo.id = 'drink2welcome';

  // Título de Login
  const title = document.createElement('h2');
  title.setAttribute('id', 'titleWelcome'); // agregamos id
  title.textContent = '¡Tu cuenta ha sido creada con exito!';

  // Botón para ir al inicio de Sesión
  const buttonIniciarSesion = document.createElement('button'); // creamos el elemento boton
  buttonIniciarSesion.setAttribute('id', 'btnIniciarSesion2'); // agregamos
  buttonIniciarSesion.textContent = 'Iniciar sesión'; // contenido del boton
  buttonIniciarSesion.addEventListener('click', () => {
  // evento
    navigateTo('/login');
  });

  section.append(
    imgLogo,
    title,
    buttonIniciarSesion,
  );

  return section;
}

export default welcome;
