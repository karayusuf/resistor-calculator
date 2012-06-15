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
