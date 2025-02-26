import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game, { getStage, move, place } from "./Game";
import { expect, test, vi } from "vitest";

test("renders robot", () => {
  render(<Game />);

  expect(screen.getByLabelText("Robot")).toBeInTheDocument();
  expect(screen.getByLabelText("Robot").parentElement).toHaveStyle({
    top: "180px",
    left: "120px",
  });
});

test("clicks Move to move robot", async () => {
  const user = userEvent.setup();

  render(<Game />);

  await user.click(screen.getByText("Move"));

  expect(screen.getByLabelText("Robot").parentElement).toHaveStyle({
    top: "120px",
    left: "120px",
  });
});

test("clicks Left to turn robot to the left", async () => {
  const user = userEvent.setup();

  render(<Game />);

  await user.click(screen.getByText("Left"));
  await user.click(screen.getByText("Move"));

  expect(screen.getByLabelText("Robot").parentElement).toHaveStyle({
    top: "180px",
    left: "60px",
  });
});

test("clicks Right to turn robot to the right", async () => {
  const user = userEvent.setup();

  render(<Game />);

  await user.click(screen.getByText("Right"));
  await user.click(screen.getByText("Move"));

  expect(screen.getByLabelText("Robot").parentElement).toHaveStyle({
    top: "180px",
    left: "180px",
  });
});

test("clicks Report to report robot position", async () => {
  const user = userEvent.setup();
  const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => vi.fn());

  render(<Game />);

  await user.click(screen.getByText("Report"));
  expect(alertSpy).toHaveBeenCalledWith("Robot is at (2, 3) facing North");
});

test("clicks Block to place a block", async () => {
  const user = userEvent.setup();

  render(<Game />);

  expect(screen.queryAllByLabelText("Block")).toHaveLength(0);

  await user.click(screen.getByText("Block"));

  expect(screen.queryAllByLabelText("Block")).toHaveLength(1);
});

test("moves robot without block", () => {
  const robotPosition = { x: 2, y: 3, face: "North" };

  const newPosition = move(robotPosition, []);

  expect(newPosition).toEqual({ x: 2, y: 2, face: "North" });
});

test("does not move robot with block", () => {
  const robotPosition = { x: 2, y: 3, face: "North" };

  const newPosition = move(robotPosition, [{ x: 2, y: 2 }]);

  expect(newPosition).toEqual({ x: 2, y: 3, face: "North" });
});

test("gets a size of 2 by 2 stage", () => {
  const stage = getStage(2, 2);

  expect(stage).toEqual([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ]);
});

test("does not place block on robot", () => {
  const stage = getStage(2, 2);
  const robotPosition = { x: 0, y: 0 };
  const blockPositions = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
  ];

  const blockPosition = place(stage, robotPosition, blockPositions);

  expect(blockPosition).toBeUndefined();
});
