function MultiplierBand() {
  var band = new Band(4)
  band.setValue(1);

  var valueColors = {
    '1'       : 'black'
  , '10'      : 'brown'
  , '100'     : 'red'
  , '1000'    : 'orange'
  , '10000'   : 'yellow'
  , '100000'  : 'green'
  , '1000000' : 'blue'
  , null      : null
  , '0.1'     : 'gold'
  , '0.01'    : 'silver'
  }

  band.valueColors = function() {
    return valueColors;
  };

  band.color = function() {
    return valueColors[band.value().toString()];
  };

  return band;
};
