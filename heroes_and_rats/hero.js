var Hero = function(name) {
  this.name = name;
  this.health = 100;
  // this.favouriteFood = favouriteFood;
  // this.speak = speak;
  this.task = [];
}

Hero.prototype.getFavouriteFood = function() {
  return this.favouriteFood;
}





module.exports = Hero;

// A. Create a constructor to create a Hero character

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete
