import { getAllByText, getByText, render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  // test("Debe hacer match con el snapshot", () => {
  //   const title = "hola mundo";
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("Aqui debe de mnostrar el titulo en un h1", () => {
    const title = "hola, soy goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // no recomendado, pero util
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });
  test("debe de mostrar el subtitulo enviado por props", () => {
    const title = "hola, soy goku";
    const subTitle = "Soy un subtitulo";
    // const { getByText } = render(
    //   <FirstApp title={title} subTitle={subTitle} />
    // );
    // expect(getByText(subTitle)).toBeTruthy();
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
