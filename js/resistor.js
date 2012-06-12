/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */
(function() {

  function Resistor(numDigits) {
    var resistor = this;

    resistor.numDigits = numDigits;

    resistor.draw = function(paper, x, y, width, height) {
      resistor.container = paper.rect(x, y, width, height);
      resistor.container.attr({ 'stroke' : '#fff' });

      resistor.wire = paper.rect(x, ((y - 4) * 1.5), width, 4);
      resistor.wire.attr({ 'stroke' : '#000', 'stroke-width' : '2px' });

      resistor.body = paper.rect(x + width/3, y, width/3, height)
      resistor.body.attr({ 'fill' : '#fff', 'stroke' : '#000', 'stroke-width' : '2px' })

      resistor.digit1 = new Digit(1, resistor);
      resistor.digit1.draw(paper);

      resistor.digit2 = new Digit(2, resistor);
      resistor.digit2.draw(paper);

      resistor.multiplier = new DigitMultiplier(resistor);
      resistor.multiplier.draw(paper);

      resistor.tolerance = new DigitTolerance(resistor);
      resistor.tolerance.draw(paper);
    };

    return resistor;
  };

  function Digit(number, resistor) {
    var digit = this;

    digit.number   = number
    digit.resistor = resistor

    digit.x = resistor.body.attr('x') + ((resistor.body.attr('width')/10) * number);
    digit.y = resistor.body.attr('y');

    digit.width = resistor.body.attr('width') / 20;
    digit.height = resistor.body.attr('height');

    digit.draw = function(paper) {
      digit.container = paper.rect(digit.x, digit.y, digit.width, digit.height);
      digit.container.attr({ 'fill' : '#d2d2d2', 'stroke' : '#000', 'stroke-width' : '2px' });
    }

    return digit;
  }

  function DigitMultiplier(resistor) {
    return new Digit(3, resistor);
  }

  function DigitTolerance(resistor) {
    return new Digit(8.5, resistor);
  }

  function DigitSelect(digit) {
    var digitSelect = this;
    digitSelect.digit = digit;

    digitSelect.labelText = function() {
      switch(digitSelect.digit)
      {
        case 1:
          return '1st Digit'
        case 2:
          return '2nd Digit'
        case 3:
          return '3rd Digit'
      }
    };

    digitSelect.draw = function(paper, x, y, width, height) {
      digitSelect.container = paper.rect(x, y, width, height);
      digitSelect.container.attr({ 'stroke' : '#fff' });

      digitSelect.label = paper.rect(x, y, width, height/11);
      digitSelect.label.attr({ 'stroke-width' : '2px' });

      digitSelect.labelText = paper.text(x + 48, y + 18, digitSelect.labelText());
      digitSelect.labelText.attr({ 'font-size' : '16px' });

      for(var i = 0; i < 10; i++) {
        var button = digitSelect['button' + i];
        var buttonY = y + 10 + (height/11 * (i + 1))

        button = paper.rect(x, buttonY, width, height/11);
        button.attr({ 'r' : '5px' });

        var label = paper.text(x + button.attr('width')/2, buttonY + button.attr('height')/2, i)
        label.attr({ 'font-size' : '16px' });
      }
    };

    return digitSelect;
  }



  var paper = Raphael("paper", 700, 800);

  var fourBandResistor = new Resistor(4)
  fourBandResistor.draw(paper, 50, 50, 600, 40);

  var digitSelect = DigitSelect(1);
  digitSelect.draw(paper, 50, 170, 100, 400);

  var digitSelect2 = DigitSelect(2);
  digitSelect2.draw(paper, 170, 170, 100, 400);

  var digitSelect3 = DigitSelect(3);
  digitSelect3.draw(paper, 290, 170, 100, 400);

})();
