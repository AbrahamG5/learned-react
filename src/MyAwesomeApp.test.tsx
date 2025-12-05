import { describe, expect, test } from "vitest";
import { MyAwesomeApp } from "./MyAwesomeApp";
import { render, screen } from "@testing-library/react";
describe("MyAwesomeApp", () => {
  test("Should render first and last name", () => {
    const { container } = render(<MyAwesomeApp />);
    /* console.log(container.innerHTML); */
    /* render(<MyAwesomeApp/>) */
    screen.debug();
    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Abraham");

    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("Garcia");
  });

  test("Should render first and last name - With screen", () => {
    render(<MyAwesomeApp />);
    /* console.log(container.innerHTML); */
    /* render(<MyAwesomeApp/>) */
    screen.debug();
    /* const h1 = screen.getByRole('heading', {
        level:1,
      }) */
    const h1 = screen.getByTestId("test-id-name");
    expect(h1.innerHTML).toContain("Abraham");
  });

  test("Should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
