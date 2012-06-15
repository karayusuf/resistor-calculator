describe("A Band", function() {
  var resistor = new Resistor();

  describe("Initialize", function() {
    it("Sets the default value of the band to 0", function() {
      var band = new Band(resistor, 1);
      expect(band.value()).toEqual(0);
    });

    it("Sets the position of the band using the paramter", function() {
      var band = new Band(resistor, 2);
      expect(band.position()).toEqual(2);
    });
  });

  describe("value()", function() {
    var band;

    beforeEach(function() {
      band = new Band(resistor, 1);
    });

    it("is 0 if the Band is black", function() {
      band.setColor('black');
      expect(band.value()).toEqual(0);
    });

    it("is 1 if the Band is brown", function() {
      band.setColor('brown');
      expect(band.value()).toEqual(1);
    });

    it("is 2 if the Band is red", function() {
      band.setColor('red');
      expect(band.value()).toEqual(2);
    });

    it("is 3 if the Band is orange", function() {
      band.setColor('orange');
      expect(band.value()).toEqual(3);
    });

    it("is 4 if the Band is yellow", function() {
      band.setColor('yellow');
      expect(band.value()).toEqual(4);
    });

    it("is 5 if the Band is green", function() {
      band.setColor('green');
      expect(band.value()).toEqual(5);
    });

    it("is 6 if the Band blue", function() {
      band.setColor('blue');
      expect(band.value()).toEqual(6);
    });

    it("is 7 if the Band violet", function() {
      band.setColor('violet');
      expect(band.value()).toEqual(7);
    });

    it("is 8 if the Band grey", function() {
      band.setColor('grey');
      expect(band.value()).toEqual(8);
    });

    it("is 9 if the Band white", function() {
      band.setColor('white');
      expect(band.value()).toEqual(9);
    });
  });

});
