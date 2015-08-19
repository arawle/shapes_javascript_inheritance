var Rectangle = require("../src/rectangle");

var rectangle;

xdescribe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.area()).toEqual(20);
    });
  });

  xdescribe("Draw", function() {
    it("should should be 4 for a rectangle", function() {
      expect(shape.draw()).toEqual("A shape with " + 4 + " sides");
    });
  });

  describe("toString", function() {
    it("should should be a string with 4 sides, and the color blue", function() {
      expect(shape.toString()).toEqual("[Shape sides:" + 4 + ", color:" + 'blue' +" ]");
    });
  });
  
  describe("getRGB", function() {
    it("should be the rgb for blue", function() {
      expect(shape.getRGB()).toEqual("rgb(0, 0, 255)");
    });
  });

});
