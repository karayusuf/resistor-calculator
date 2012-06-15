(function() {

  var canvas = Raphael("paper", 700, 800);

  var resistor = new ResistorPresenter(canvas);
  resistor.draw();

  var firstBandSelect = new BandValueSelect(resistor.firstBand);
  firstBandSelect.draw(canvas, 50);

  var secondBandSelect = new BandValueSelect(resistor.secondBand);
  secondBandSelect.draw(canvas, 170);

  var multiplierBandSelect = new MultiplierBandSelect(resistor.multiplierBand);
  multiplierBandSelect.draw(canvas, 290);

  var toleranceBandSelect = new BandValueSelect(resistor.toleranceBand);
  toleranceBandSelect.draw(canvas, 410);

})();
