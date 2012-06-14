(function() {

  var canvas = Raphael("paper", 700, 800);
  var resistor = new ResistorPresenter(canvas);

  resistor.draw(50, 50, 600, 100);

})();
