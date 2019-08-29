const calculator = require("./calculator");
describe("calc functions", () => {
  describe("adds", () => {
    it("should add 2 numbers", () => {
      expect(calculator.multiAdd([2, 2])).toBe(4);
    });

    it("should be additive", () => {
      expect(calculator.multiAdd([2, 0])).toBe(2);
    });

    it("should subtract 2 numbers", () => {
      expect(calculator.subtract(2, 2)).toBe(0);
    });

    it("should divide 2 numbers", () => {
      expect(calculator.divide(2, 2)).toBe(1);
    });
  });

  describe("mults", () => {
    it("should multiply 2 numbers", () => {
      expect(calculator.multiply(2, 2)).toBe(4);
    });
  });
});

/// AAA

/*
A - Arrange
A - Act
A - Assess
*/
