
describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe fallar 2', () => {
        //1. Inicializacion
        const mensaje = 'Hola Mundo';
        //2. Estimulo
        const mensaje2 = mensaje.trim();
        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
        expect(mensaje).toBe('Hola Mundo');
    })  
})

