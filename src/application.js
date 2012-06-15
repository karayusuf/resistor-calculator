(function() {

  var paper = Raphael("paper", 700, 800);
  var resistor = new Resistor();

  resistor.svg = paper.set();
  resistor.svg.push(
    paper.rect(50, 50, 600, 4)
  , paper.rect(250, 22, 200, 58)
  );
  resistor.svg.attr({
    'fill'         : 'white'
  , 'stroke'       : 'black'
  , 'stroke-width' : '2'
  });

  resistor.outputLabel = paper.text(650, 114, "Ohms");
  resistor.outputLabel.attr({
    'font-size' : '18px'
  , 'text-anchor' : 'end'
  });

  resistor.output = paper.text(595, 114, resistor.value());
  resistor.output.attr({
    'font-size' : '18px'
  , 'text-anchor' : 'end'
  });

  resistor.toleranceLabel = paper.set();
  resistor.toleranceLabel.push(
    paper.text(595, 138, "+")
  , paper.text(595, 136, "_")
  );
  resistor.toleranceLabel.attr({
    'font-size' : '18px'
  , 'text-anchor' : 'end'
  });

  resistor.toleranceOutput = paper.text(650, 138, resistor.tolerance());
  resistor.toleranceOutput.attr({
    'font-size' : '18px'
  , 'text-anchor' : 'end'
  });

  resistor.firstBand().svg = paper.rect(270, 22, 18, 58);
  resistor.firstBand().svg.attr({
    'fill' : resistor.firstBand().color()
  });

  resistor.secondBand().svg = paper.rect(300, 22, 18, 58);
  resistor.secondBand().svg.attr({
    'fill' : resistor.firstBand().color()
  });

  resistor.multiplierBand().svg = paper.rect(330, 22, 18, 58);
  resistor.multiplierBand().svg.attr({
    'fill' : resistor.multiplierBand().color()
  });

  resistor.toleranceBand().svg = paper.rect(400, 22, 18, 58);
  resistor.toleranceBand().svg.attr({
    'fill' : resistor.toleranceBand().color()
  });

  new ColorSelector(resistor.firstBand(), 50, 100);
  new ColorSelector(resistor.secondBand(), 170, 100);
  new ColorSelector(resistor.multiplierBand(), 290, 100);
  new ColorSelector(resistor.toleranceBand(), 410, 100);

})();
