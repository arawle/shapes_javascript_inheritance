var Rectangle = require("./rectangle");

function Square(sideLength, color) {
  Rectangle.call(this, sideLength, sideLength, color)
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.area = function (sideLength) {
  return this.sideLength*this.sideLength;
}

Square.prototype.perimeter = function (sideLength) {
  return (this.sideLength * 4);
}

Square.prototype.draw = function () {
  return "A shape with " + 4 + " sides";
}

Square.prototype.toString = function () {
  return '[Square sideLength: ' + this.sideLength + ', color:' + this.color + ' ]';
}

module.exports = Square;
