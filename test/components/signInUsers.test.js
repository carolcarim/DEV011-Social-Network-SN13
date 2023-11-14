import login from '../../src/views/login.js';
//import signInUsers from '../../src/views/login.js'; //acá se importa la funcion que tenemos en login.js  '../../src/views.js/login.js'
// pense que podria ser directamente desde index.js, pero aparece error, ya que firebase no permite eso

describe('login', () => {
  test('its a function', () => {
    expect(typeof login).toBe('function');
  });
});
