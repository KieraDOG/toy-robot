import minmax from "./minmax";

test("returns min value when n is less than min", () => {
  const result = minmax(1, 2, 3);

  expect(result).toBe(2);
});

test("returns max value when n is larger than max", () => {
  const result = minmax(4, 2, 3);

  expect(result).toBe(3);
});
