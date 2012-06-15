function MultiplierBand() {
  var band = new Band(4);

  band.setColor('black');
  band.colorValues = {
    'black'  : 1
  , 'brown'  : 10
  , 'red'    : 100
  , 'orange' : 1000
  , 'yellow' : 10000
  , 'green'  : 100000
  , 'blue'   : 1000000
  , 'gold'   : 0.1
  , 'silver' : 0.01
  };

  return band;
};
