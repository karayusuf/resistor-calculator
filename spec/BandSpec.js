describe("A Band", function() {

  describe("Initialize", function() {
    it("Sets the default value of the band to 0", function() {
      var band = new Band(1);
      expect(band.value()).toEqual(0);
    });

    it("Sets the position of the band using the paramter", function() {
      var band = new Band(2);
      expect(band.position()).toEqual(2);
    });
  });

  describe("setValue", function() {
    it("Sets the value of the band", function() {
      var band = new Band(1);
      band.setValue(8);
      expect(band.value()).toEqual(8);
    });
  });

});
