(function() {
  var Panel, Task;

  Task = window.GLOBALS.Task;

  Panel = window.GLOBALS.Panel;

  $(function() {
    var i, initialTasks, len, panel, task, tasks;
    initialTasks = [
      {
        name: "Clean the house",
        priority: 1,
        dueDate: "2018-01-01"
      },
      {
        name: "Go shopping",
        priority: 1,
        dueDate: "2018-02-02"
      },
      {
        name: "Pay the bills",
        priority: 2,
        dueDate: "2018-03-03"
      }
    ];
    tasks = {};
    for (i = 0, len = initialTasks.length; i < len; i++) {
      task = initialTasks[i];
      tasks[task.name] = new Task(task.name, task.priority, task.dueDate, false);
    }
    return panel = new Panel($("#tasks-table"), tasks);
  });

}).call(this);
