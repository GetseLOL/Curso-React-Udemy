//Desestructuración de objetos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usContext = ({ nombre, edad, clave }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};

const { nombreClave, anios } = usContext(persona);

console.log({ nombreClave, anios });
