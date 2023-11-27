/**
 * @jest-environment jsdom
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, jest } from '@jest/globals';
import register from '../../src/views/register.js';
import * as auth from '../../src/lib/auth.js';

// se usa jestmock para simular firebase
describe('register', () => {
  test('existe un boton', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const haveAButtonLogin = DOM.querySelector('#btnRegister');
    expect(haveAButtonLogin).not.toBe(undefined);
  });
  test('Hay un input para  la contraseña', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const haveaInput = DOM.querySelector('#inputCreatePass');
    haveaInput.click();
    expect(haveaInput).not.toBe(undefined); // evalua si una funcion ha sido llam,ada o no
  });

  test('Al dar click registra y te redirige a welcome', () => {
    const DOM = document.createElement('div');
    const createUser = auth.createUser;
    const navigaTo = jest.fn();
    jest.spyOn(auth, 'createUser').mockImplementation(() => Promise.resolve({ alert: 'Usuario creado exitosamente' }));
    DOM.append(register(navigaTo));
    const btnRegister = DOM.querySelector('#btnRegister');
    btnRegister.click();
    setTimeout(() => {
      expect(navigaTo).toHaveBeenCalledWith('/welcome');
      expect(createUser).toHaveBeenCalledTimes(1);
    });
  });
});
