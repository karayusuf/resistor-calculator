describe("A Four Band Resistor", function() {
  var resistor;

  beforeEach(function() {
    resistor = new Resistor(4);
  });

  describe("Initialize", function() {

    it("sets the firstBandValue 0", function() {
      expect(resistor.firstBandValue).toEqual(0);
    });

  });

  it("has a default value of 0", function() {
    expect(resistor.value).toEqual(0);
  });

});
