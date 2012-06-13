/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */
function Resistor() {
  var resistor = {
    'firstBandValue'  : 0
  , 'secondBandValue' : 0
  , 'multiplierValue' : 1
  , 'toleranceValue'  : 0.05
  };

  resistor.setBands = function(firstBandValue, secondBandValue,
                               multiplierValue, toleranceValue) {
    this.firstBandValue = firstBandValue;
    this.secondBandValue = secondBandValue;
    this.multiplierValue = multiplierValue;
    this.toleranceValue = toleranceValue;
  };

  resistor.value = function() {
    var x = ""
          + this.firstBandValue
          + this.secondBandValue;

    return parseInt(x) * this.multiplierValue;
  };

  return resistor;
}
