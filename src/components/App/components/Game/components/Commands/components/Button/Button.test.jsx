import { expect, vi } from "vitest";
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("render button with children", () => {
  render(<Button>Button</Button>);

  expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();

  render(<Button onClick={onClick}>Button</Button>);

  await user.click(screen.getByRole("button", { name: "Button" }));

  expect(onClick).toHaveBeenCalled();
});
