var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Task = require("../task");

describe("Hero", function() {

  var hero;
  var food;
  var task;

  beforeEach(function() {
    heroOne = new Hero("Rick");
    itemOne = new Food("Szechuan Sauce", 3);
    itemTwo = new Food("Burger", 10);
    saveTheUniverse = new Task(10, 10, 100);
    saveMorty = new Task(4, 8, 80);
    takeOutTheRubbish = new Task(1, 1, 10);
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

  it("should start with an empty array of tasks", function() {
    assert.strictEqual(0, heroOne.tasks.length);
  })

  it("can eat food and gain health", function() {
    heroOne.setFavouriteFood("Szechuan Sauce");
    heroOne.eatFood(itemOne)
    heroOne.eatFood(itemTwo)
    assert.strictEqual(116, heroOne.health);
  })

  it("can add a task to the array", function() {
    heroOne.addTask(saveTheUniverse);
    assert.strictEqual(1, heroOne.tasks.length);
  })

  it("can sort tasks by difficulty", function() {
    heroOne.addTask(saveTheUniverse);
    heroOne.addTask(saveMorty);
    heroOne.addTask(takeOutTheRubbish);
    assert.strictEqual(3, heroOne.tasks.length);
  })















});