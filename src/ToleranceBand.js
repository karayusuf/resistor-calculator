function ToleranceBand(resistor) {
  var band = new Band(resistor, 5);

  band.setColor('gold');
  band.colorValues = {
    'brown'  : 0.01
  , 'red'    : 0.02
  , 'gold'   : 0.05
  , 'silver' : 0.1
  };

  return band;
};
