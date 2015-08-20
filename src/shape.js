
function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
  }

var colors = {red:'rgb(255,0,0)',
              blue: 'rgb(0,0,255)', 
              green: 'rgb(0,255,0)', 
              yellow: 'rgb(255, 255, 0)', 
              black: 'rgb(0,0,0)'}

Shape.prototype.area = function(length, width) {
  return 0;
};

Shape.prototype.perimeter = function() {
  return 0;
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function(sides) {
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function(sides, color) {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

Shape.prototype.getRGB = function() {
   for (var key in colors){
    if(key === this.color){
      return colors[key];
    }
   }
}

module.exports = Shape;
