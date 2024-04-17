import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

describe("Home component", () => {
  it("should render the Home page header", () => {
    render(<Home />);
    expect(screen.getByText("Home page")).toBeInTheDocument();
  });
});
