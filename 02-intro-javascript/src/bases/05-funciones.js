// Funciones
// function saludar (nombre) {
//   return `Hola ${nombre}`
// }

const saludar = (nombre) => `Hola ${nombre}`;

const saludar2 = function (nombre) {
  return `Hola ${nombre}`;
};

console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));

//tarea
const getUser = (username) => ({
  uid: "ABC123",
  username,
});

const usuarioActivo = getUser("Bulma");

console.log(usuarioActivo);
