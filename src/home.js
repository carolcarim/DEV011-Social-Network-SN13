/* eslint-disable max-len */
// son los elementos que se visualizan en la aplicacion

// funcion que retorna un nodo titulo con mensaje de bienvenida y un boton para navegar a la ruta login

// file home,js

function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');

  button.textContent = 'login';
  title.textContent = 'Bienvenido a Drink Atlas';
  section.append(title, button);
  return section;
}
export default home;
