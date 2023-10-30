/* eslint-disable max-len */
// son los elementos que se visualizan en la aplicacion

// funcion que retorna un nodo titulo con mensaje de bienvenida y un boton para navegar a la ruta login

// file home,js


function home(navigateTo) {
  const section = document.createElement('section');
  section.setAttribute('id', 'sectionHome') //agregamos

  //Logo 
  const img = document.createElement('img');
  img.src = 'https://github.com/carolcarim/DEV011-Social-Network-SN13/blob/main/src/Images/Drink%20Atlas%20Logo.png?raw=true';
  img.alt = 'Logo de Drink Atlas';
  img.id = 'Drink';
  document.body.appendChild(img); // agregamos el documeto de imagen al documento body

  //Titulo
  const title = document.createElement('h2');
  title.textContent = 'Bienvenido a Drink Atlas';

  //Boton iniciar sesion
  const buttonIniciarSesion = document.createElement('button'); //creamos el elemento boton
  buttonIniciarSesion.textContent = 'Iniciar sesión'; //contenido del boton
  buttonIniciarSesion.addEventListener("click", () => //evento
{
navigateTo('/login');

});

// Boton registrarse
  const buttonRegistrarse = document.createElement('button');
  buttonRegistrarse.textContent = 'Registrarse';

  
//Para agregar los elementos a la seccion
  section.append(title, buttonIniciarSesion, buttonRegistrarse,);
  return section;
}
export default home;
