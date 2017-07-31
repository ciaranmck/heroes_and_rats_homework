var Task = function(difficulty, urgency, reward, complete) {
this.difficulty = difficulty;
this.urgency = urgency;
this.reward = reward;
this.complete = complete;
}


module.exports = Task;

// B. Create a constructor to create Task objects

// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed