/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */
function Resistor(numberOfBands) {
  var resistor = {};

  resistor.numberOfBands = numberOfBands;
  resistor.firstBandValue = 0;
  resistor.value = 0;

  return resistor;
}
