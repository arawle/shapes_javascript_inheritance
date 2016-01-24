var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
    expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

  describe("Draw", function() {
    it("should should be 4 for a square", function() {
      expect(square.draw()).toEqual("A shape with " + 4 + " sides");
    });
  });

  describe("toString", function() {
    it("should should be a string with 4 sides, and the color red", function() {
      expect(square.toString()).toEqual("[Square sideLength: " + 2 + ", color:" + 'red' +" ]");
    });
  });

  describe("getRGB", function() {
    it("should be the rgb for red", function() {
      expect(square.getRGB()).toEqual("rgb(255,0,0)");
    });
  });
});
