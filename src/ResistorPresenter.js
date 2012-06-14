function ResistorPresenter(canvas) {
  var canvas = canvas;
  var resistor = new Resistor();
  var presenter = {};

  function drawWire() {
    var wire = canvas.rect(50, 50, 600, 4);
    wire.attr({
      'fill'         : '#fff'
    , 'stroke'       : '#000'
    , 'stroke-width' : '2'
    });
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

  presenter.draw = function() {
    presenter.wire = drawWire();
    presenter.body = drawBody();

    presenter.firstBand = new BandPresenter(canvas, resistor.firstBand());
    presenter.firstBand.draw();

    presenter.secondBand = new BandPresenter(canvas, resistor.secondBand());
    presenter.secondBand.draw();

    presenter.multiplierBand = new BandPresenter(canvas, resistor.multiplierBand());
    presenter.multiplierBand.draw();

    presenter.toleranceBand = new BandPresenter(canvas, resistor.toleranceBand());
    presenter.toleranceBand.draw();
  };

  return presenter;
};
