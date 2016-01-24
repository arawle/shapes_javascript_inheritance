var Shape = require("./shape");

function Rectangle (height, width, color) {
  Shape.call(this, 4, color);
  this.height = height;
  this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function (sideLength) {
  return this.height*this.width;
}

Rectangle.prototype.perimeter = function (height, width) {
  return (this.height*2 + this.width*2);
}

Rectangle.prototype.draw = function () {
  return "A shape with " + 4 + " sides";
}

Rectangle.prototype.toString = function () {
  return '[Rectangle sideLengths: ' + this.height + ' and ' + this.width + ', color: blue]';
}

module.exports = Rectangle;
