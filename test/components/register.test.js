import register from '../../src/views/register.js';

jest.mock('../../src/lib/auth.js', () => ({
  createUser: jest.fn(() => Promise.resolve()),
})); // se usa jestmock para simular firebase

describe('createUser', () => {
  it('should call createUserWithEmailAndPassword with the correct parameters and navigate to "/"', async () => {
    const navigateTo = jest.fn(); // Mock navigateTo function
    const email = 'test@example.com'; // Mock email
    const password = 'password123'; // Mock password

    await createUser(navigateTo);

    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
