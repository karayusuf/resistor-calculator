function ResistorPresenter(canvas) {
  var canvas = canvas;
  var resistor = new Resistor();
  var presenter = {};

  function drawWire(origX, origY, origWidth, origHeight) {
    var height = origHeight / 25;
    var y = ( origY + origHeight + height ) / 2;

    var wire = canvas.rect(origX, y, origWidth, height);
    wire.attr({ 'stroke' : '#000', 'stroke-width' : '2' });
    return wire;
  };

  presenter.draw = function(x, y, width, height) {
    presenter.wire = drawWire(x, y, width, height);
  };

  return presenter;
};
