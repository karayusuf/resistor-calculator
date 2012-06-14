/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */
function Resistor() {

  var bands = {
    'firstBand'      : new Band(1)
  , 'secondBand'     : new Band(2)
  , 'multiplierBand' : new MultiplierBand(4)
  , 'toleranceBand'  : new ToleranceBand(8)
  };

  var resistor = {
    'firstBand' : function() {
      return bands.firstBand;
    }
  , 'secondBand' : function() {
      return bands.secondBand;
    }
  , 'multiplierBand' : function() {
      return bands.multiplierBand;
    }
  , 'toleranceBand' : function() {
      return bands.toleranceBand;
    }
  , 'firstBandValue' : function() {
      return bands.firstBand.value();
    }
  , 'secondBandValue' : function() {
      return bands.secondBand.value()
    }
  , 'multiplierValue' : function() {
      return bands.multiplierBand.value()
    }
  , 'toleranceValue' : function() {
      return bands.toleranceBand.value()
    }
  };


  resistor.setBands = function(firstBandValue, secondBandValue,
                               multiplierValue, toleranceValue) {
    bands.firstBand.setValue(firstBandValue);
    bands.secondBand.setValue(secondBandValue);
    bands.multiplierBand.setValue(multiplierValue);
    bands.toleranceBand.setValue(toleranceValue);
  };

  resistor.value = function() {
    var x = ""
          + this.firstBandValue()
          + this.secondBandValue();

    return parseInt(x) * this.multiplierValue();
  };

  return resistor;
}
