var Hero = function(name) {
  this.name = name;
  this.health = 100;
  this.favouriteFood = null;
  this.speak = null;
  this.tasks = [];
}

Hero.prototype.setFavouriteFood = function(favouriteFood) {
  this.favouriteFood = favouriteFood;
}

Hero.prototype.setSpeech = function(speak) {
  this.speak = speak;
}

Hero.prototype.eatFood = function(food) {
  if(this.favouriteFood === food.type) {
  this.health += food.replenishmentValue * 2
  }
  else {
    this.health += food.replenishmentValue
  }
}

Hero.prototype.addTask = function(task) {
  this.tasks.push(task)
}

Hero.prototype.sortTasksByDifficulty = function() {
  this.tasks.sort(function(a, b) {
    if(a.difficulty < b.difficulty)
    return -1;
    if(a.difficulty > b.difficulty)
    return +1;
    return 0; 
  });

  Hero.prototype.removeFirstTaskFromArray = function() {
    var removedTask =  this.tasks.shift(0);
    return removedTask;
  }

  Hero.prototype.checkTasksAreComplete = function() {
    for(task of this.tasks) {
      if(task.complete === false) {
        return "Task not complete"
      } 
      else {
        return "Task Completed!"
      }
    }
  }

};



module.exports = Hero;

// D. Extend your hero.

// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.

// A. Create a constructor to create a Hero character

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete
