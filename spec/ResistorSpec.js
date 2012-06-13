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

  describe("setBands", function() {

    describe("when called with 1, 4, 7, 0.1", function() {
      beforeEach(function() {
        resistor.setBands(1, 4, 7, 0.1);
      });

      it("sets the firstBandValue to 1", function() {
        expect(resistor.firstBandValue).toEqual(1);
      });

      it("sets the secondBandValue to 4", function() {
        expect(resistor.secondBandValue).toEqual(4);
      });

      it("sets the multiplierValue to 7", function() {
        expect(resistor.multiplierValue).toEqual(7);
      });

      it("sets the toleranceValue to 0.1", function() {
        expect(resistor.toleranceValue).toEqual(0.1);
      });
    });

    describe("when called with 8, 2, 5, 0.05", function() {
      beforeEach(function() {
        resistor.setBands(8, 2, 5, 0.05);
      });

      it("sets the firstBandValue to 8", function() {
        expect(resistor.firstBandValue).toEqual(8);
      });

      it("sets the secondBandValue to 2", function() {
        expect(resistor.secondBandValue).toEqual(2);
      });

      it("sets the multiplierValue to 5", function() {
        expect(resistor.multiplierValue).toEqual(5);
      });

      it("sets the toleranceValue to 0.05", function() {
        expect(resistor.toleranceValue).toEqual(0.05);
      });

    });

  });

  describe("Value", function() {

    it("returns 11 when the bands are set to 1, 1, 1, 0.1",
    function() {
      resistor.setBands(1, 1, 1, 0.1);
      expect(resistor.value()).toEqual(11)
    });

    it("returns 420000 when the bands are set to 4, 2, 10000, 0.1",
    function() {
      resistor.setBands(4, 2, 10000, 0.1);
      expect(resistor.value()).toEqual(420000)
    });

  });

});
