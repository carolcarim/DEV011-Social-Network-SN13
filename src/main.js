// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './home.js';
import login from './login.js';
import error from './error.js';

myFunction();

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);

// Obtiene el elemento `#root`
const rootElement = document.querySelector('#root');

// Llama a la función `home()`
const section = home();

// Agrega el elemento `section` al elemento `#root`
rootElement.append(section);

const inputEmail = document.querySelector('#inputEmail');
const inputPass = document.querySelector('#inputPass');

// Establece el texto de marcador de posición
inputEmail.setAttribute('placeholder', 'Ingresa tu correo');
inputPass.setAttribute('placeholder', 'contraseña');
