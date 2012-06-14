function BandValueSelect(band) {
  var band = band;
  var values = [0,1,2,3,4,5,6,7,8,9];

  function Button(value) {
    var value = value;
    var svgElement;

    this.draw = function(canvas) {
      var y = 125 + (30 * value);
      var x = 50 + (100 * (band.position() - 1) + (20 * (band.position() - 1)));
      svgElement = canvas.rect(x, y, 100, 30);
      svgElement.attr({ 'fill': band.colorForValue(value) });
      svgElement.click(function() { band.setValue(value); });
    };

    return this;
  };

  this.draw = function(canvas) {
    for (var i = 0; i < values.length; i++) {
      var button = new Button(i);
      button.draw(canvas);
    };
  };

  return this;
};
