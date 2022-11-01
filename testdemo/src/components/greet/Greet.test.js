import { Greet } from "./Greet";
import { render, screen } from "@testing-library/react";

describe("Greet", () => {
  test("renders properly", () => {
    render(<Greet />);
    const text = screen.getByText("Guest");
    expect(text).toBeInTheDocument();
  });
});

describe("Greet with name", () => {
  test("renders properly with name", () => {
    render(<Greet name={"Air campus"} />);
    const text = screen.getByText("Hello Air campus");
    expect(text).toBeInTheDocument();
  });
});
