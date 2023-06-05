// promesas
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroeById } from "./08-import-export-funciones-de-arreglos";



// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
// resolve();
//     const heroe = getHeroeById(2);
//     resolve(heroe);
//     reject("No se pudo encontrar el heroe");
//   }, 2000);

// setInterval(() => {
//   resolve();
// }, 2000);
// });

// promesa
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = async (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(2);

      if (heroe) resolve(heroe);
      else reject("No se pudo encontrar el heroe");
    }, 2000);
  });

getHeroeByIdAsync(3).then(console.log).catch(console.warn);
