import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Prueba en 05-funciones.js', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();
    expect(user).toEqual(testUser);
  })

  test('getUsuario debe retornar un objeto', () => {
    const name = 'Getsemani';
    const testUser = {
      uid: 'ABC567',
      username: name
    }
    const user = getUsuarioActivo(name);
    expect(user).toEqual(testUser);
  })
  
})
