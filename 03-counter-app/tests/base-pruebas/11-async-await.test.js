import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await.js", () => {
  test("debe retornar el url de la imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string");
  });

  //   test("debe retornar un error si no encuentra la apikey", async () => {
  //     const res = await getImagen();
  //     expect(res).toBe("No se encontro la imagen");
  //   });
});
