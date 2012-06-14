function ResistorPresenter(canvas) {
  var canvas = canvas;
  var resistor = new Resistor();
  var presenter = {};

  function drawWire() {
    var wire = canvas.rect(50, 50, 600, 4);
    wire.attr({ 'stroke' : '#000', 'stroke-width' : '2' });
    return wire;
  };

  function drawBody() {
    var body = canvas.rect(252, 22, 200, 58);
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
  };

  return presenter;
};
