import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("Should return the sum of two positive numbers", () => {
    console.log("Hola mundo");
    // ! Arrange
    const a = 1;
    const b = 3;

    // ! Act
    const result = add(a, b);
    //! Assert
    expect(result).toBe(a + b);
  });
});

describe("subtract", () => {
  test("should return the subtraction of two numbers", () => {
    const num1 = 6;
    const num2 = 3;

    const result = subtract(num1, num2);

    expect(result).toBe(num1 - num2);
  });
  test("should return A", () => {
    const a = 2;
    const b = 0;

    const result = subtract(a, b);

    expect(result).toBe(a);
  });
});

describe("Multiply", () => {
  test("Should return the multiplication of two numbers", () => {
    const num1 = 2;
    const num2 = 5;

    const result = multiply(num1, num2);

    expect(result).toBe(num1 * num2);
  });
  test("should return a multiple of 5", () => {
    const a = 7;
    const b = 5;

    const result = multiply(a, b);
    const multiple = result % 5;
    expect(multiple).toBe(0);
  });
});
