/**
 * @jest-environment jsdom
 */
import login from '../../src/views/login.js';
import * as auth from '../../src/lib/auth.js';
// eslint-disable-next-line import/no-extraneous-dependencies

describe('login', () => {
  test('is a function', () => {
    expect(typeof login).toBe('function');
  });
  test('existe un boton de regresar', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const haveAButtonLogin = DOM.querySelector('#btnReturnLogin');
    expect(haveAButtonLogin).not.toBe(undefined);
  });
  test('al hacer click te regresa a home', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(login(navigateTo));
    const buttonBack = DOM.querySelector('#btnReturnLogin');
    buttonBack.click();
    expect(navigateTo).toHaveBeenCalledTimes(1);
  });
  test('Al dar click ingresar te lleva homepage', () => {
    const DOM = document.createElement('div');
    const signInUsers = auth.signInUsers;
    const navigaTo = jest.fn();
    jest.spyOn(auth, 'signInUsers').mockImplementation(() => Promise.resolve({ alert: 'ingreso exitoso ' }));
    DOM.append(login(navigaTo));
    const btnRegister = DOM.querySelector('#btnLogin');
    btnRegister.click();
    setTimeout(() => {
      expect(navigaTo).toHaveBeenCalledWith('/homepage');
      expect(signInUsers).toHaveBeenCalledTimes(1);
    });
  });
});