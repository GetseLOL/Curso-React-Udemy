import { screen, render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en <FirstApp />", () => {
  const title = "Hola soy goku";
  const subTitle = "Soy un subtitulo"; 
  test("debe hacer natchcon el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el mensaje hola soy goku", () => {
    render(<FirstApp title={title} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe mostrar el titulo en h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
