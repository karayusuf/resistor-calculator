function ResistorPresenter(canvas) {
  var canvas = canvas;
  var resistor = new Resistor();
  var presenter = {};

  function drawWire(x, y, width, height) {
    var height = height / 25;
    var wire = canvas.rect(x, y, width, height);
    wire.attr({ 'stroke' : '#000', 'stroke-width' : '2' });
    return wire;
  };

  presenter.draw = function(x, y, width, height) {
    presenter.wire = drawWire(x, y, width, height);
  };

  return presenter;
};
