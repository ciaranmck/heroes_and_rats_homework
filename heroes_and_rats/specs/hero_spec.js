var assert = require("assert");
var Hero = require("../hero");

describe("Hero", function() {

  var hero;

  beforeEach(function() {
    heroOne = new Hero("Rick");
  });

  it("should have a name", function() {
    assert.strictEqual(heroOne.name, "Rick");
  });

  it("should start with full health", function() {
    assert.strictEqual(100, heroOne.health);
  })

  it("should have a favourite food", function() {
    heroOne.setFavouriteFood("Szechuan Sauce");
    assert.strictEqual("Szechuan Sauce", heroOne.favouriteFood);
  })

  it("should be able to speak", function() {
    heroOne.setSpeech("Wubalubadubdub!!");
    assert.strictEqual("Wubalubadubdub!!", heroOne.speak);
  })

  it("should have start with an empty array of tasks", function() {
    assert.strictEqual(0, heroOne.task.length);
  })

});