import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas.js", () => {
  test("getHeroeByIdAsync debe retornar un heroe ", (done) => {
    const id = 1;
    const objectHeroe = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(objectHeroe);
      done();
    });
  });

  test("getHeroeByIdAsync debe de obtener un error si un heroe no existe ", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
