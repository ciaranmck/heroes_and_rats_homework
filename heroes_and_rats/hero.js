var Hero = function(name) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = null;
  // this.speak = speak;
  this.task = [];
}

Hero.prototype.setFavouriteFood = function(favouriteFood) {
  this.favouriteFood = favouriteFood;
}





module.exports = Hero;

// A. Create a constructor to create a Hero character

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete
