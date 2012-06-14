function ResistorPresenter(canvas) {
  var canvas = canvas;
  var resistor = new Resistor();
  var presenter = {};

  function drawWire() {
    var wire = canvas.rect(50, 50, 600, 4);
    wire.attr({
      'fill'         : '#fff'
    , 'stroke'       : '#000'
    , 'stroke-width' : '2' });
    return wire;
  };

  function drawBody() {
    var body = canvas.rect(250, 22, 200, 58);
    body.attr({
      'fill'         : '#fff'
    , 'stroke'       : '#000'
    , 'stroke-width' : '2'
    });
    return body;
  };

  function drawBand(number) {
    var x = 250 + (10 * (number + number));
    var band = canvas.rect(x, 22, 10, 58);
    band.attr({
      'fill'         : '#d2d2d2'
    , 'stroke'       : '#000'
    , 'stroke-width' : '2'
    });
    return band;
  };

  presenter.draw = function() {
    presenter.wire = drawWire();
    presenter.body = drawBody();
    presenter.firstBand = drawBand(1);
    presenter.secondBand = drawBand(2);
    presenter.multiplierBand = drawBand(4);
    presenter.toleranceBand = drawBand(8);
  };

  return presenter;
};
