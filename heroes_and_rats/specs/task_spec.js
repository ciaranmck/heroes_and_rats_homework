var assert = require("assert");
var Task = require("../task");

describe("Task", function() {

  var task;

  beforeEach(function() {
    saveTheUniverse = new Task(10, 10, 100);
  });

  it("should have a difficulty", function() {
    assert.strictEqual(saveTheUniverse.difficulty, 10);
  });

  it("should have an urgency", function() {
    assert.strictEqual(saveTheUniverse.urgency, 10);
  });

  it("should have a reward", function() {
    assert.strictEqual(saveTheUniverse.reward, 100);
  });
  
});

