(function() {

  var canvas = Raphael("paper", 700, 800);
  var resistor = new ResistorPresenter(canvas);

  resistor.draw();
  button = canvas.rect(50, 200, 100, 100);
  button.attr({ 'fill' : 'red' });
  button.click(function() {
    resistor.firstBand.setValue(8);
  });

})();
