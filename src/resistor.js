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

  resistor.value = function() {
    return 0;
  };

  return resistor;
}
