import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes/heroes";

describe("Prueba de funcionamiento 08-imp-exp.js", () => {
  test("Debe retornar el id del heroe", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("Debe retornar el nombre de la empresa", () => {
    const owner = "DC";
    const heroesArr = getHeroesByOwner("DC");
    expect(heroesArr).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(heroesArr.length).toEqual(3);
  });

  test("Debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesArr = getHeroesByOwner(owner);
    expect(heroesArr).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(heroesArr.length).toEqual(2);
  });
});
