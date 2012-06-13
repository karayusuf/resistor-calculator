/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */
function Resistor(numberOfBands) {
  var resistor = {};

  resistor.numberOfBands = numberOfBands;
  resistor.firstBandValue = 0;
  resistor.secondBandValue = 0;
  resistor.multiplierValue = 1;
  resistor.toleranceValue = 5;
  resistor.value = 0;

  return resistor;
}
