function BandPresenter(canvas, band) {
  var canvas = canvas;
  var band = band;

  this.draw = function() {
    var x = 250 + (10 * (band.position() + band.position()));
    this.svgElement = canvas.rect(x, 22, 10, 58);
    this.svgElement.attr({
      'fill'         : '#d2d2d2'
    , 'stroke'       : '#000'
    , 'stroke-width' : '2'
    });
  };

  return this;
};
