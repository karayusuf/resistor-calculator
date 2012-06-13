describe("A Four Band Resistor", function() {
  var resistor;

  beforeEach(function() {
    resistor = new Resistor();
  });

  describe("Initialize", function() {

    it("sets the firstBandValue to 0", function() {
      expect(resistor.firstBandValue).toEqual(0);
    });

    it("sets the secondBandValue to 0", function() {
      expect(resistor.secondBandValue).toEqual(0);
    });

    it("sets the multiplierValue to 1", function() {
      expect(resistor.multiplierValue).toEqual(1);
    });

    it("sets the toleranceValue to 0.05", function() {
      expect(resistor.toleranceValue).toEqual(0.05);
    });

    it("has a value of 0", function() {
      expect(resistor.value()).toEqual(0);
    });

  });

  describe("Value", function() {

    it("returns 11 when the bands are set to 1, 1, 1, 0.1",
    function() {
      resistor.firstBandValue = 1
      resistor.secondBandValue = 1
      resistor.multiplierValue = 1
      resistor.toleranceValue = 0.1

      expect(resistor.value()).toEqual(11)
    });

    it("returns 420000 when the bands are set to 4, 2, 10000, 0.1",
    function() {
      resistor.firstBandValue = 4
      resistor.secondBandValue = 2
      resistor.multiplierValue = 10000
      resistor.toleranceValue = 0.1

      expect(resistor.value()).toEqual(420000)
    });

  });

});
