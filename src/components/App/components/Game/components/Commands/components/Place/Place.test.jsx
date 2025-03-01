import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Place from "./Place";

test("renders place button", () => {
  render(<Place onTypeChoose={vi.fn()} />);

  expect(screen.getByRole("button", { name: "Place" })).toBeInTheDocument();
});

test("opens a choose type dialog when place button is clicked", async () => {
  const user = userEvent.setup();

  render(<Place onTypeChoose={vi.fn()} />);

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: "Place" }));

  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

test("closes the dialog when a type is chosen", async () => {
  const user = userEvent.setup();

  render(<Place onTypeChoose={vi.fn()} />);

  await user.click(screen.getByRole("button", { name: "Place" }));
  await user.selectOptions(screen.getByRole("combobox"), "BLOCK");
  await user.click(screen.getByRole("button", { name: "Confirm" }));

  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

test("places with the chosen type", async () => {
  const user = userEvent.setup();

  const onTypeChoose = vi.fn();

  render(<Place onTypeChoose={onTypeChoose} />);

  await user.click(screen.getByRole("button", { name: "Place" }));
  await user.selectOptions(screen.getByRole("combobox"), "BLOCK");
  await user.click(screen.getByRole("button", { name: "Confirm" }));

  expect(onTypeChoose).toHaveBeenCalledWith("BLOCK");
});
