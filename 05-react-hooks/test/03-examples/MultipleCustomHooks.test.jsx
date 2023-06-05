import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe("Pruebas en MultipleCustomHooks()", () => {
  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));

    // screen.debug();

    const nextButton = screen.getByRole("button", {
      name: "Next quote",
    });
    expect(nextButton.disabled).toBeTruthy();
    // expect(nextButton.disable);
  });

  test("Debe de mostrar un Quote ", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Fernando", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Fernando")).toBeTruthy();
  });
});
