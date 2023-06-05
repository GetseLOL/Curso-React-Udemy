//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

//Tarea

const usState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [pj, funcion] = usState('Goku');

console.log(pj, funcion)