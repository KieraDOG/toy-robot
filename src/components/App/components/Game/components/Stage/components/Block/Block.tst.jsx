import { render } from "@testing-library/react";
import Block from "./Block";

test("renders Block", () => {
  render(<Block />);

  expect(screen.getByLabelText("Block")).toBeInTheDocument();
});
