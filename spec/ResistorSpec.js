describe("A Four Band Resistor", function() {
  var resistor;

  beforeEach(function() {
    resistor = new Resistor();
  });

  describe("Initialize", function() {

    it("has a value of 0", function() {
      expect(resistor.value()).toEqual(0);
    });

  });

  describe("Value", function() {

    it("returns 0 when the color bands are all black",
    function() {
      resistor.firstBand().setColor('black');
      resistor.secondBand().setColor('black');
      resistor.multiplierBand().setColor('black');
      expect(resistor.value()).toEqual(0)
    });

    it("returns 110 when the color bands are all brown",
    function() {
      resistor.firstBand().setColor('brown');
      resistor.secondBand().setColor('brown');
      resistor.multiplierBand().setColor('brown');
      expect(resistor.value()).toEqual(110)
    });

    it("returns '1.3 M' when the color bands are brown, orange, and green",
    function() {
      resistor.firstBand().setColor('brown');
      resistor.secondBand().setColor('orange');
      resistor.multiplierBand().setColor('green');
      expect(resistor.value()).toEqual('1.3 M')
    });

  });

});
