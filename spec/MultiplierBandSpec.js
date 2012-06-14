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

  describe("color()", function() {
    it("is black when it has a value of 1", function() {
      band.setValue(1);
      expect(band.color()).toEqual('black');
    });

    it("is brown when it has a value of 10", function() {
      band.setValue(10);
      expect(band.color()).toEqual('brown');
    });

    it("is red when it has a value of 100", function() {
      band.setValue(100);
      expect(band.color()).toEqual('red');
    });

    it("is orange when it has a value of 1000", function() {
      band.setValue(1000);
      expect(band.color()).toEqual('orange');
    });

    it("is yellow when it has a value of 10000", function() {
      band.setValue(10000);
      expect(band.color()).toEqual('yellow');
    });

    it("is green when it has a value of 100000", function() {
      band.setValue(100000);
      expect(band.color()).toEqual('green');
    });

    it("is blue when it has a value of 1000000", function() {
      band.setValue(1000000);
      expect(band.color()).toEqual('blue');
    });

    it("is gold when it has a value of 0.1", function() {
      band.setValue(0.1);
      expect(band.color()).toEqual('gold');
    });

    it("is silver when it has a value of 0.01", function() {
      band.setValue(0.01);
      expect(band.color()).toEqual('silver');
    });

  });

});
