describe("A Multiplier Band", function() {
  var band = new MultiplierBand();

  describe("Initialize", function() {
    it("has a value() of 1", function() {
      expect(band.value()).toEqual(1);
    });

    it("has a position() of 4", function() {
      expect(band.position()).toEqual(4);
    });
  });

  describe("value()", function() {
    it("is 1 when it is black", function() {
      band.setColor('black');
      expect(band.value()).toEqual(1);
    });

    it("is 10 when it is brown", function() {
      band.setColor('brown');
      expect(band.value()).toEqual(10);
    });

    it("is 100 when it is red", function() {
      band.setColor('red');
      expect(band.value()).toEqual(100);
    });

    it("is 1000 when it is orange", function() {
      band.setColor('orange');
      expect(band.value()).toEqual(1000);
    });

    it("is 10000 when it is yellow", function() {
      band.setColor('yellow');
      expect(band.value()).toEqual(10000);
    });

    it("is 100000 when it is green", function() {
      band.setColor('green');
      expect(band.value()).toEqual(100000);
    });

    it("is 1000000 when it is blue", function() {
      band.setColor('blue');
      expect(band.value()).toEqual(1000000);
    });

    it("is gold when it is 0.1", function() {
      band.setColor('gold');
      expect(band.value()).toEqual(0.1);
    });

    it("is silver when it is 0.01", function() {
      band.setColor('silver');
      expect(band.value()).toEqual(0.01);
    });

  });

});
