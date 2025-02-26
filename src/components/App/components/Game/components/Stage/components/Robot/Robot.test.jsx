import { render, screen } from "@testing-library/react";
import Robot from "./Robot";

test("renders Robot", () => {
  render(<Robot />);

  expect(screen.getByLabelText("Robot")).toBeInTheDocument();
});
