import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

// Dave Gray : Next.js with React Testing Library, Jest, TypeScript
// https://www.youtube.com/watch?v=AS79oJ3Fcf0&list=PL0Zuz27SZ-6NTWVG8eM7Dt43vvzulnIbK&index=2
// Home is the component name in page.tsx
describe("Home", () => {
  it(`should have docs text`, () => {
    // AAA Pattern
    render(<Home />); // ARRANGE
    const myElem = screen.getByText("Docs"); // ACT
    expect(myElem).toBeInTheDocument(); // ASSERT
  });

  it(`should contain the text "information" `, () => {
    // AAA Pattern
    render(<Home />); // ARRANGE
    const myElem = screen.getByText(/information/i); // ACT
    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});
