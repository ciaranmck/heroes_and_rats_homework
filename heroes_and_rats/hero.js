var Hero = function(name) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = null;
  this.speak = null;
  this.task = [];
}

Hero.prototype.setFavouriteFood = function(favouriteFood) {
  this.favouriteFood = favouriteFood;
}

Hero.prototype.setSpeech = function(speak) {
  this.speak = speak;
}





module.exports = Hero;

// A. Create a constructor to create a Hero character

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete
