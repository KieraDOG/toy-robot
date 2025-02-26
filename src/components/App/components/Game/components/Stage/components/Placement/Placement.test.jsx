import { render, screen } from "@testing-library/react";
import Placement from "./Placement";

test("renders Placement", () => {
  render(<Placement position={{ x: 0, y: 0 }}>Robot</Placement>);

  expect(
    screen.getByRole("gridcell", { name: "Placement at 0,0" })
  ).toBeInTheDocument();

  expect(screen.getByText("Robot")).toBeInTheDocument();
});

test("renders Placement at the right position", () => {
  render(<Placement position={{ x: 1, y: 2 }}>Robot</Placement>);

  expect(
    screen.getByRole("gridcell", { name: "Placement at 1,2" })
  ).toHaveStyle({
    top: "120px",
    left: "60px",
  });
});
