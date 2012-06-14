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

  describe("color", function() {
    var band;

    beforeEach(function() {
      band = new Band(1);
    });

    it("is black if the Band has a value of 0", function() {
      band.setValue(0);
      expect(band.color()).toEqual('black');
    });

    it("is brown if the Band has a value of 1", function() {
      band.setValue(1);
      expect(band.color()).toEqual('brown');
    });

    it("is red if the Band has a value of 2", function() {
      band.setValue(2);
      expect(band.color()).toEqual('red');
    });

    it("is orange if the Band has a value of 3", function() {
      band.setValue(3);
      expect(band.color()).toEqual('orange');
    });

    it("is yellow if the Band has a value of 4", function() {
      band.setValue(4);
      expect(band.color()).toEqual('yellow');
    });

    it("is green if the Band has a value of 5", function() {
      band.setValue(5);
      expect(band.color()).toEqual('green');
    });

    it("is blue if the Band has a value of 6", function() {
      band.setValue(6);
      expect(band.color()).toEqual('blue');
    });

    it("is violet if the Band has a value of 7", function() {
      band.setValue(7);
      expect(band.color()).toEqual('violet');
    });

    it("is grey if the Band has a value of 8", function() {
      band.setValue(8);
      expect(band.color()).toEqual('grey');
    });

    it("is white if the Band has a value of 9", function() {
      band.setValue(9);
      expect(band.color()).toEqual('white');
    });
  });

});
