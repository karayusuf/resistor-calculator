function MultiplierBandSelect(multiplierBand) {
  var band = multiplierBand;

  function Button(value) {
    var value = value;
    var svgElement;

    this.draw = function(canvas, x, y) {
      var y = 125 + (30 * y);
      svgElement = canvas.rect(x, y, 100, 30);
      svgElement.attr({ 'fill': band.colorForValue(value) });
      svgElement.click(function() { band.setValue(value); });
    };

    return this;
  };

  this.draw = function(canvas, x) {
    var i = 0;
    for(value in band.values()) {
      if (value !== 'null') {
        var button = new Button(value);
        button.draw(canvas, x, i);
      }
      i += 1;
    }
  };

  return this;
};
