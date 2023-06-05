//Arregllos en javascript
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const arreglo = [1, 2, 3, 4];

//No usar push porque modifica el objeto original
//arreglo.push(1);

let arreglo2 = [...arreglo, 5];
let arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});
//arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
