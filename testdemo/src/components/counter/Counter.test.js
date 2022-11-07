import { render, screen } from "@testing-library/react";

import { Counter } from "./Counter";

describe("Counter Component", () => {
  test("renders input correctly", () => {
    render(<Counter />);

    const compHeadingElement = screen.getByRole("heading", {
      level: 2,
      name: "Air campus", // text inside the heading component
    });
    expect(compHeadingElement).toBeInTheDocument();

    const testingHeadingElement = screen.getByRole("heading", {
      level: 3,
    });
    expect(testingHeadingElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const ageElement = screen.getByRole("textbox", {
      name: "age",
    });
    expect(ageElement).toBeInTheDocument();

    const locationElement = screen.getByRole("combobox");
    expect(locationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();

    // getByLabelText
    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const locationElement2 = screen.getByLabelText("Location");
    expect(locationElement2).toBeInTheDocument();

    // getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("firstName");
    expect(nameElement3).toBeInTheDocument();

    // getByText -> p, span, div
    const paraElement = screen.getByText("good night. thank you");
    expect(paraElement).toBeInTheDocument();

    // getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("vasanth");
    expect(nameElement4).toBeInTheDocument();

    // getByAltText
    const imageElement = screen.getByAltText("picture");
    expect(imageElement).toBeInTheDocument();

    // getByTitle
    const paraElement2 = screen.getByTitle("vasanth");
    expect(paraElement2).toBeInTheDocument();

    // custom -> test-id
    const customElement = screen.getByTestId("custom");
    expect(customElement).toBeInTheDocument();
  });
});
