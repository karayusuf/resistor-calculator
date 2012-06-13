describe("A Four Band Resistor", function() {
  var resistor;

  beforeEach(function() {
    resistor = new Resistor(4);
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

    it("sets the toleranceValue to 5", function() {
      expect(resistor.toleranceValue).toEqual(5);
    });

    it("sets the value to 0", function() {
      expect(resistor.value).toEqual(0);
    });

  });

});
