import { screen, render } from "@testing-library/react";

import { Skills } from "./Skills";

describe.only("Skills component", () => {
  const skills = ["HTML", "CSS", "JavaScript", "react"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders all skills", () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Log in",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("not render start learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("start learning should display after some delay", async () => {
    render(<Skills skills={skills} />);
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // default time is 1sec
    expect(startLearningBtn).toBeInTheDocument();
  });
});
