(function() {
  var Panel, Task;

  Task = window.GLOBALS.Task;

  Panel = class Panel {
    constructor(panel, tasks1) {
      this.panel = panel;
      this.tasks = tasks1;
      this.init();
    }

    init() {
      var _this;
      _this = this;
      this.render();
      return $("#btn-add").click(function() {
        var key;
        key = $("#input-task").val();
        _this.tasks[key] = new Task(key, 1, "2018-03-03", false);
        $("#input-task").val("");
        return _this.render();
      });
    }

    getTasks() {
      return this.tasks;
    }

    setTasks(tasks) {
      return this.tasks = tasks;
    }

    render() {
      var _this, key, ref, row, value;
      _this = this;
      this.panel.find("tbody").html("");
      ref = this.tasks;
      for (key in ref) {
        value = ref[key];
        if (value.isDone()) {
          continue;
        }
        row = `<tr data-id='${key}'> <td>${key}</td> <td>${value.priority}</td> <td>${value.dueDate}</td> <td> <button class='btn btn-primary btn-incr-priority' data-id='${key}'>+Priority</button> <button class='btn btn-danger btn-finish' data-id='${key}'>Done</button> </td> </tr>`;
        this.panel.find("tbody:last").append(row);
      }
      this.panel.find(".btn-incr-priority").each(function() {
        return $(this).click(function() {
          key = $(this).attr("data-id");
          _this.tasks[key].increasePriority();
          return _this.render();
        });
      });
      return this.panel.find(".btn-finish").each(function() {
        return $(this).click(function() {
          key = $(this).attr("data-id");
          _this.tasks[key].finish();
          return _this.render();
        });
      });
    }

  };

  window.GLOBALS.Panel = Panel;

}).call(this);
