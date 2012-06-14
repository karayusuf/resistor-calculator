function Band(position) {
  var value = 0;
  var position = position;

  var colorMap = [
    'black'
  , 'brown'
  , 'red'
  , 'orange'
  , 'yellow'
  , 'green'
  , 'blue'
  , 'violet'
  , 'grey'
  , 'white'
  ]

  this.value = function() {
    return value;
  };

  this.setValue = function(newValue) {
    value = newValue;
    return value;
  };

  this.position = function() {
    return position;
  };

  this.color = function() {
    return colorMap[value];
  };

  this.colorForValue = function(value) {
    return colorMap[value];
  };

  return this;
};

function MultiplierBand(position) {
  var band = new Band(position)
  band.setValue(1);

  return band;
};

function ToleranceBand(position) {
  var band = new Band(position);
  band.setValue(0.05);

  return band;
};
