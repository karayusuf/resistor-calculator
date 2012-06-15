/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */
function Resistor() {
  var firstBand      = new Band(this, 1);
  var secondBand     = new Band(this, 2);
  var multiplierBand = new MultiplierBand(this)
  var toleranceBand  = new ToleranceBand(this)

  this.firstBand = function() {
    return firstBand;
  };

  this.secondBand = function() {
    return secondBand;
  };

  this.multiplierBand = function() {
    return multiplierBand;
  };

  this.toleranceBand = function() {
    return toleranceBand;
  };

  this.value = function() {
    var x = ""
          + firstBand.value()
          + secondBand.value();

    var actualValue = parseInt(x) * multiplierBand.value();
    if ((actualValue / 1000000) > 1) {
      return actualValue / 1000000 + " M";
    } else if ((actualValue / 1000) > 1) {
      return actualValue / 1000 + " K";
    } else {
      return actualValue;
    }
  };

  this.tolerance = function() {
    return (toleranceBand.value() * 100) + " %"
  };

  return this;
}
