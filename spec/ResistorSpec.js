describe("A Four Band Resistor", function() {
  var resistor;

  beforeEach(function() {
    resistor = new Resistor();
  });

  describe("Initialize", function() {

    it("sets the firstBandValue to 0", function() {
      expect(resistor.firstBandValue()).toEqual(0);
    });

    it("sets the secondBandValue to 0", function() {
      expect(resistor.secondBandValue()).toEqual(0);
    });

    it("sets the multiplierValue to 1", function() {
      expect(resistor.multiplierValue()).toEqual(1);
    });

    it("sets the toleranceValue to 0.05", function() {
      expect(resistor.toleranceValue()).toEqual(0.05);
    });

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

    it("returns 1300000 when the color bands are brown, orange, and green",
    function() {
      resistor.firstBand().setColor('brown');
      resistor.secondBand().setColor('orange');
      resistor.multiplierBand().setColor('green');
      expect(resistor.value()).toEqual(1300000)
    });

  });

});
