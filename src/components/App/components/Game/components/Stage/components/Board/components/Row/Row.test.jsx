import { render, screen } from "@testing-library/react";
import Row from "./Row";

test("renders row with name x", () => {
  render(<Row y={1} />);

  expect(screen.getByRole("row", { name: "1" })).toBeInTheDocument();
});

test("renders 5 cells per row", () => {
  render(<Row y={1} />);

  expect(screen.getByRole("cell", { name: "0,1" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "1,1" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "2,1" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "3,1" })).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "4,1" })).toBeInTheDocument();
});
