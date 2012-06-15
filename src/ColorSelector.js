function ColorSelector(band, startX, startY) {
  var svg = band.svg;
  var paper = svg.paper;

  var height = 30;
  var width = 100;

  function Button(color) {
    var color = color;

    this.draw = function(offset) {
      var y = startY + (offset * height);
      var ele = paper.rect(startX, y, width, height);
      ele.attr({ 'fill' : color });
    };

    return this;
  };

  var offset = 0;
  for(color in band.colorValues) {
    var button = new Button(color);
    button.draw(offset);
    offset += 1;
  };

  return this;
};
