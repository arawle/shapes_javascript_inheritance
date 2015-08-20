var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4, 6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a rectangle with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe("Draw", function() {
    it("should should be 4 for a rectangle", function() {
      expect(rectangle.draw()).toEqual("A shape with " + 4 + " sides");
    });
  });

  describe("toString", function() {
    it("should should be a string with 4 sides, and the color blue", function() {
      expect(rectangle.toString()).toEqual('[Rectangle sideLengths: 4 and 6, color: blue]');
    });
  });
  
  describe("getRGB", function() {
    it("should be the rgb for blue", function() {
      expect(rectangle.getRGB()).toEqual("rgb(0,0,255)");
    });
  });

});
