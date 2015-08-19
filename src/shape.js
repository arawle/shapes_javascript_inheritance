
function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
  this.colors = ['red', 'blue', 'green', 'yellow', 'black'];
  this.rgbColors = ['rgb(255,0,0)', 'rgb(0,0,255)', 'rgb(0,255,0)', 'rgb(255, 255, 0)', 'rgb(0,0,0)']
}
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
  // console.log('======' + this.colors.indexOf([this.color]));
  for(var i = 0; i < this.colors.length; i++) {
	  if(this.colors.indexOf([this.color])) {
		return (this.rgbColors[i]);
	  } else {
	  	return ('that color is not supported')
	  }
	}
}

module.exports = Shape;
