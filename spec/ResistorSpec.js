describe("A Resistor", function() {
  var resistor;

  beforeEach(function() {
    resistor = new Resistor(4);
  });

  it("has a default value of 0", function() {
    expect(resistor.value()).toEqual(0);
  });

});
