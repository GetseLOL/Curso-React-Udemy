import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("Pruebas en <GifItem />", () => {
  const title = "Iron Cat";
  const url =
    "https://i.kym-cdn.com/photos/images/newsfeed/002/164/868/943.jpg";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug()
    // console.log(screen.getByRole("img").alt);
    // expect(screen.getByRole("img").alt).toBe(title);
    // expect(screen.getByRole("img").src).toBe(url);
    const { alt, src } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });


  test('Debe mostrar el titulo en el component ', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
  
});
