import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

it("should have docs text", () => {
  // AAA Pattern
  render(<Home />); // ARRANGE
  const myElem = screen.getByText("Docs"); // ACT
  expect(myElem).toBeInTheDocument(); // ASSERT
});
