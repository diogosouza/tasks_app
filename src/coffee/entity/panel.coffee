Task = window.GLOBALS.Task

class Panel
	constructor: (@panel, @tasks) ->
		@init()
		
	init: ->
		_this = this

		@render()

		$("#btn-add").click ->
			key = $("#input-task").val()
			_this.tasks[key] = new Task key, 1, "2018-03-03", false
			$("#input-task").val("")
			_this.render()
			
	getTasks: ->
		@tasks
		
	setTasks: (tasks) ->
		@tasks = tasks

	render: ->
		_this = this
		
		@panel.find("tbody").html ""
		
		for key, value of @tasks
			if value.isDone()
				continue
				
			row = "<tr data-id='#{key}'>
				<td>#{key}</td>
				<td>#{value.priority}</td>
				<td>#{value.dueDate}</td>
				<td>
					<button class='btn btn-primary btn-incr-priority' data-id='#{key}'>+Priority</button>
					<button class='btn btn-danger btn-finish' data-id='#{key}'>Done</button>
				</td>
			</tr>"
			@panel.find("tbody:last").append(row)
			
		@panel.find(".btn-incr-priority").each ->
			$(this).click ->
				key = $(this).attr("data-id")
				_this.tasks[key].increasePriority()
				_this.render()
				
		@panel.find(".btn-finish").each ->
			$(this).click ->
				key = $(this).attr("data-id")
				_this.tasks[key].finish()
				_this.render()
				
window.GLOBALS.Panel = Panel