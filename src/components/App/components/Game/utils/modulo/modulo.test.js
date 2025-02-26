import modulo from "./modulo";

test("calculates 1 % 2 to be 1", () => {
  const result = modulo(1, 2); // 执行代码

  expect(result).toBe(1); // assertion 断言
});

test("calculates -1 % 2 to be 1", () => {
  const result = modulo(-1, 2);

  expect(result).toBe(1);
});
