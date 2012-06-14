function Band(position) {
  var value = 0;
  var position = position;

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

  return this;
};
