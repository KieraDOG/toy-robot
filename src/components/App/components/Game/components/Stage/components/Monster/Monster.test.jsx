import { render, screen } from "@testing-library/react";
import Monster from "./Monster";

test("renders Monster", () => {
  render(<Monster />);

  expect(screen.getByLabelText("Monster")).toBeInTheDocument();
});
