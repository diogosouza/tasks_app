(function() {
  var Task;

  Task = class Task {
    constructor(taskName) {
      this.taskName = taskName;
      if (this.taskName.length === 0) {
        throw "Invalid task description";
      }
    }

    getTaskName() {
      return this.taskName;
    }

  };

  window.GLOBALS.Task = Task;

}).call(this);
