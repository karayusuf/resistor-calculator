/*! Resistor Calculator
 *
 *  Simple application to calculate
 *  the value of a resistor.
 */

(function() {
  var paper = Raphael("paper", 600, 800);

  var digit1;
  var digit2;
  var multiplier;
  var tolerance;

  paper.rect(50, 50, 500, 4)
       .attr({
           'fill'         : '#fff'
         , 'stroke'       : '#000'
         , 'stroke-width' : '2px'
       });

  paper.rect(225, 31, 150, 40)
       .attr({
           'fill'         : '#fff'
         , 'stroke'       : '#000'
         , 'stroke-width' : '2px'
       });

  digit1 = paper.rect(240, 31, 10, 40);
  digit1.attr({ 'fill' : '#000' });

  digit2 = paper.rect(260, 31, 10, 40);
  digit2.attr({ 'fill' : '#000' });

  multiplier = paper.rect(280, 31, 10, 40);
  multiplier.attr({ 'fill' : '#000' });

  tolerance = paper.rect(350, 31, 10, 40);
  tolerance.attr({ 'fill' : '#000' });

})();
