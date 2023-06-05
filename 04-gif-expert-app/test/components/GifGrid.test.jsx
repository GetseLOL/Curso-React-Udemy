import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "2B";
  test("Debe de mostrar loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar las imagenes cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [{
      id: "ABC",
      title: '2B',
      url: 'adasdasd.com'
    },{
      id: "CBA",
      title: "2A",
      url: "asdadasd.com"
    }]
    useFetchGifs.mockReturnValue({
      images: gifs ,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2)

  });
});
