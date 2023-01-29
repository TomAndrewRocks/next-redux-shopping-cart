import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./../src/components/Cart";

describe("Cart", () => {
  it("renders a Cart", () => {
    render(<Cart />);

    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
