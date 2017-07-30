var assert = require("assert");
var Food = require("../food");

describe("Food", function() {

  var food;

  beforeEach(function() {
    itemOne = new Food("Szechuan Sauce", 3);
  });

  it("should have a type", function() {
    assert.strictEqual(itemOne.type, "Szechuan Sauce");
  });

});