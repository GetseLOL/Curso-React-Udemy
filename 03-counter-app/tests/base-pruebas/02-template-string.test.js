import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe retornar "hola soy getsemani"', () => {
        const name = "getsemani";
        const message = getSaludo (name);
        expect(message).toBe(getSaludo(name));
    })

})
