var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe("Perimeter", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.perimeter()).toEqual(0);
    });
  });

  describe("Draw", function() {
    it("should should be 1 for this abstract shape", function() {
      expect(shape.draw()).toEqual("A shape with " + 1 + " sides");
    });
  });

  describe("toString", function() {
    it("should should be a string with 1 side, and the color red", function() {
      expect(shape.toString()).toEqual("[Shape sides:" + 1 + ", color:" + 'red' +" ]");
    });
  });
 	
 	describe("getRGB", function() {
    it("should have an rgb value of (255, 0, 0)", function() {
      expect(shape.getRGB()).toEqual("rgb(255,0,0)");
    });
  });


});
