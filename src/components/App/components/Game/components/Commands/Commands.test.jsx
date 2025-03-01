import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Commands from "./Commands";

test("renders Move button and calls onMoveButtonClick when clicked", async () => {
  const onMoveButtonClick = vi.fn();
  const user = userEvent.setup();

  render(
    <Commands
      onMoveButtonClick={onMoveButtonClick}
      onLeftButtonClick={vi.fn()}
      onRightButtonClick={vi.fn()}
      onBlockButtonClick={vi.fn()}
      onReportButtonClick={vi.fn()}
    />
  );

  await user.click(screen.getByRole("button", { name: "Move" }));

  expect(onMoveButtonClick).toHaveBeenCalled();
});

test("renders Left button and calls onLeftButtonClick when clicked", async () => {
  const onLeftButtonClick = vi.fn();
  const user = userEvent.setup();

  render(
    <Commands
      onMoveButtonClick={vi.fn()}
      onLeftButtonClick={onLeftButtonClick}
      onRightButtonClick={vi.fn()}
      onBlockButtonClick={vi.fn()}
      onReportButtonClick={vi.fn()}
    />
  );

  await user.click(screen.getByRole("button", { name: "Left" }));

  expect(onLeftButtonClick).toHaveBeenCalled();
});

test("renders Right button and calls onRightButtonClick when clicked", async () => {
  const onRightButtonClick = vi.fn();
  const user = userEvent.setup();

  render(
    <Commands
      onMoveButtonClick={vi.fn()}
      onLeftButtonClick={vi.fn()}
      onRightButtonClick={onRightButtonClick}
      onBlockButtonClick={vi.fn()}
      onReportButtonClick={vi.fn()}
    />
  );

  await user.click(screen.getByRole("button", { name: "Right" }));

  expect(onRightButtonClick).toHaveBeenCalled();
});

test("renders Place button and calls onBlockButtonClick when choose to place Block type", async () => {
  const onBlockButtonClick = vi.fn();
  const user = userEvent.setup();

  render(
    <Commands
      onMoveButtonClick={vi.fn()}
      onLeftButtonClick={vi.fn()}
      onRightButtonClick={vi.fn()}
      onBlockButtonClick={onBlockButtonClick}
      onReportButtonClick={vi.fn()}
    />
  );

  await user.click(screen.getByRole("button", { name: "Place" }));
  await user.selectOptions(screen.getByRole("combobox"), "BLOCK");
  await user.click(screen.getByRole("button", { name: "Confirm" }));

  expect(onBlockButtonClick).toHaveBeenCalled();
});

test("renders Report button and calls onReportButtonClick when clicked", async () => {
  const onReportButtonClick = vi.fn();
  const user = userEvent.setup();

  render(
    <Commands
      onMoveButtonClick={vi.fn()}
      onLeftButtonClick={vi.fn()}
      onRightButtonClick={vi.fn()}
      onBlockButtonClick={vi.fn()}
      onReportButtonClick={onReportButtonClick}
    />
  );

  await user.click(screen.getByRole("button", { name: "Report" }));

  expect(onReportButtonClick).toHaveBeenCalled();
});
