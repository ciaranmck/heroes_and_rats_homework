var assert = require("assert");
var Hero = require("../hero");

describe("Hero", function() {

  var hero;

  beforeEach(function() {
    heroOne = new Hero("Rick");
    heroTwo = new Hero("Morty");
  });

  it("should have a name", function() {
    assert.strictEqual(heroOne.name, "Rick");
    assert.strictEqual(heroTwo.name, "Morty")
  });

  it("should start with full health", function() {
    assert.strictEqual(100, heroOne.health);
    assert.strictEqual(100, heroTwo.health);
  })

});