import { render, screen } from "@testing-library/react";
import Cell from "./Cell";

test("renders cell with name x,y", () => {
  render(<Cell x={1} y={1} />);

  expect(screen.getByRole("cell", { name: "1,1" })).toBeInTheDocument();
});

// 测试是看不见最终结果的
// 在看不见结果的情况下测试 UI
// 假如我们是视障人士
// a11y -> accessibility
