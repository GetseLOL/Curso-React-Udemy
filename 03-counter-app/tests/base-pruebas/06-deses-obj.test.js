import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Prueba de funcionamiento 06-deses-obj.js", () => {
  test("El metodo useContext debe funcionar", () => {
    const userTest = {
      nombreClave: "12312321sads",
      anios: 23,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    const user = usContext({ clave: "12312321sads", nombre: "Getsemani", edad: 23, rango: "Capitán"  });

    expect(user).toEqual(userTest);
  });
});
