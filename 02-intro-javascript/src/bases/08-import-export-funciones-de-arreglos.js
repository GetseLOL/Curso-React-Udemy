// imports exports y funciones comunes de arreglos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

import { heroes } from "../data/heroes";

export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) =>
  heroes.find((dataOwner) => dataOwner.owner === owner);

// console.log(getHeroesByOwner("Marvel"));
