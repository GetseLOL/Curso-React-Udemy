import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Pruebas en <CounterApp /> ", () => {
  const value = 10;
  test("Snapsht de counterApp", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor de 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      value.toString()
    );
  });

  test("Debe incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("Debe incrementar con el boton - 1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("Debe reiniciar los puntos", () => {
    render(<CounterApp value={value} />);
    // fireEvent.click(screen.getByText("Reset"));
    // expect(screen.getByText("10")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    expect(screen.getByText("10")).toBeTruthy();4
  });
});
