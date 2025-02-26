import { render, screen } from "@testing-library/react";
import Board from "./Board";

test("renders self", () => {
  render(<Board />);

  expect(screen.getByRole("grid", { name: "Board" })).toBeInTheDocument();
});

test("renders 5 rows", () => {
  render(<Board />);

  expect(screen.getByRole("row", { name: "0" })).toBeInTheDocument();
  expect(screen.getByRole("row", { name: "1" })).toBeInTheDocument();
  expect(screen.getByRole("row", { name: "2" })).toBeInTheDocument();
  expect(screen.getByRole("row", { name: "3" })).toBeInTheDocument();
  expect(screen.getByRole("row", { name: "4" })).toBeInTheDocument();
});
