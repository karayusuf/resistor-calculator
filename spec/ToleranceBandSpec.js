describe("A Multiplier Band", function() {
  var band = new ToleranceBand();

  describe("Initialize", function() {
    it("has a value() of 0.05", function() {
      expect(band.value()).toEqual(0.05);
    });

    it("has a position() of 5", function() {
      expect(band.position()).toEqual(5);
    });
  });

  describe("value()", function() {

    it("is 0.01 when it is brown", function() {
      band.setColor('brown');
      expect(band.value()).toEqual(0.01);
    });

    it("is 0.02 when it is red", function() {
      band.setColor('red');
      expect(band.value()).toEqual(0.02);
    });

    it("is 0.05 when it is gold", function() {
      band.setColor('gold');
      expect(band.value()).toEqual(0.05);
    });

    it("is silver when it is 0.1", function() {
      band.setColor('silver');
      expect(band.value()).toEqual(0.1);
    });

  });

});
