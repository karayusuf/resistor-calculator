function MultiplierBand() {
  var band = new Band(4);
  band.setValue(1);

  var values = {
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
  };

  band.values = function() {
    return values;
  };

  band.color = function() {
    return band.colorForValue(band.value());
  };

  band.colorForValue = function(value) {
    console.log(value);
    return values[value.toString()];
  };

  return band;
};
