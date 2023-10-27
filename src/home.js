/* eslint-disable max-len */
// son los elementos que se visualizan en la aplicacion

// funcion que retorna un nodo titulo con mensaje de bienvenida y un boton para navegar a la ruta login

// file home,js


function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
 //se AGREG
button.addEventListener("click", () =>
{
navigateTo('/login');

});

  button.textContent = 'hola';
  title.textContent = 'Bienvenido a Drink Atlas';

  section.append(title, button);
  return section;
}
export default home;
