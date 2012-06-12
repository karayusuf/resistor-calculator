/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */

(function() {
  var paper = Raphael("paper", 700, 800);

  var digit1, digit1Label;
  var digit2, digit2Label;
  var digit3, digit3Label;
  var multiplier, multiplierLabel;
  var tolerance, toleranceLabel;

  // Draw the resistor wire
  paper.rect(50, 50, 600, 4)
       .attr({
           'fill'         : '#fff'
         , 'stroke'       : '#000'
         , 'stroke-width' : '2px'
       });

  // Draw the resistor container
  paper.rect(275, 31, 150, 40)
       .attr({
           'fill'         : '#fff'
         , 'stroke'       : '#000'
         , 'stroke-width' : '2px'
       });

  // Draw the resistor's first digit
  digit1 = paper.rect(290, 31, 10, 40);
  digit1.attr({ 'fill' : '#000' });

  digit1Label = paper.rect(50, 120, 100, 40);
  digit1Label.attr({ 'fill' : '#fff', 'stroke' : '#000' });
  paper.text(100, 141, "1st Digit").attr({ 'font-size' : '16px' });

  // Draw the resistor's second digit
  digit2 = paper.rect(310, 31, 10, 40);
  digit2.attr({ 'fill' : '#000' });

  digit2Label = paper.rect(175, 120, 100, 40);
  digit2Label.attr({ 'fill' : '#fff', 'stroke' : '#000' });
  paper.text(220, 141, "2nd Digit").attr({ 'font-size' : '16px' });

  // Uncomment to add support for 3rd digit
  // Digit3Label = paper.rect(300, 120, 100, 40);
  // Digit3Label.attr({ 'fill' : '#fff', 'stroke' : '#000' });
  // Paper.text(220, 141, "2nd Digit").attr({ 'font-size' : '16px' });

  // Draw the resistor's multiplier
  multiplier = paper.rect(330, 31, 10, 40);
  multiplier.attr({ 'fill' : '#000' });

  multiplierLabel = paper.rect(425, 120, 100, 40);
  multiplierLabel.attr({ 'fill' : '#fff', 'stroke' : '#000' });
  paper.text(475, 141, "Multipler").attr({ 'font-size' : '16px' });

  // Draw the resistor's tolerance
  tolerance = paper.rect(400, 31, 10, 40);
  tolerance.attr({ 'fill' : '#000' });

  toleranceLabel = paper.rect(550, 120, 100, 40);
  toleranceLabel.attr({ 'fill' : '#fff', 'stroke' : '#000' });
  paper.text(600, 141, "Tolerance").attr({ 'font-size' : '16px' });


})();
