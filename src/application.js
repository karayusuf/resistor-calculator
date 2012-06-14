(function() {

  var canvas = Raphael("paper", 700, 800);

  var resistor = new ResistorPresenter(canvas);
  resistor.draw();

  var firstBandSelect = new BandValueSelect(resistor.firstBand);
  firstBandSelect.draw(canvas);

  var secondBandSelect = new BandValueSelect(resistor.secondBand);
  secondBandSelect.draw(canvas);

})();
