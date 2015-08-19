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

  xdescribe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.area()).toEqual(8);
    });
  });

  xdescribe("Draw", function() {
    it("should should be 4 for a square", function() {
      expect(shape.draw()).toEqual("A shape with " + 4 + " sides");
    });
  });

  xdescribe("toString", function() {
    it("should should be a string with 4 sides, and the color red", function() {
      expect(shape.toString()).toEqual("[Shape sides:" + 4 + ", color:" + 'red' +" ]");
    });
  });
  
  xdescribe("getRGB", function() {
    it("should be the rgb for red", function() {
      expect(shape.getRGB()).toEqual("rgb(255,0,0)");
    });
  });
  
});
