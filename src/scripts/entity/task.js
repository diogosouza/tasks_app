(function() {
  var Task;

  Task = class Task {
    constructor(taskName, priority, dueDate, done) {
      this.taskName = taskName;
      this.priority = priority;
      this.dueDate = dueDate;
      this.done = done;
      if (this.taskName.length === 0) {
        throw "Invalid task description";
      }
      if (this.priority < 1) {
        throw "Invalid priority";
      }
      if (this.dueDate.length === 0) {
        throw "Invalid date";
      }
    }

    getPriority() {
      return this.priority;
    }

    getDueDate() {
      return this.dueDate;
    }

    increasePriority() {
      return this.priority++;
    }

    finish() {
      this.priority = 0;
      this.dueDate = 0;
      return this.done = true;
    }

    isDone() {
      return this.done;
    }

  };

  window.GLOBALS.Task = Task;

}).call(this);
